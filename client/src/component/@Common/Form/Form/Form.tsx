import React, { FormEvent } from 'react';
import { FormCommands, FormProps as Props } from './Form.types';
import { FormContextProvider, FormContextValue, FormControlType } from '../FormContext';
import { FormControlCommands } from '../FormControls/@common';
import { FormCheckboxCommands, FormTextCommands } from '../FormControls';
import { useForwardRef } from '@pdg/react-hook';
import { FormRadioGroupCommands } from '../FormControls/FormRadioGroup';
import { FormSelectCommands } from '../FormControls/FormSelect';
import './Form.scss';

export const Form = React.forwardRef<FormCommands, Props>(
  ({ titlePosition = 'top', titleWidth = 100, hideTitle = false, disabled = false, onSubmit, ...props }, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLFormElement>(null);
    const formControls = useRef<Dict<{ type: FormControlType; commands: FormControlCommands | null; active: boolean }>>(
      {}
    );

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const finalValues: Dict<string | number | undefined | boolean> = {};
        let isAllValid = true;

        for (const name of keys(formControls.current)) {
          const { active, type, commands } = formControls.current[name];

          if (active && commands) {
            if (commands.validate()) {
              let value: string | number | boolean | undefined;

              switch (type) {
                case 'text':
                case 'email':
                case 'url':
                case 'password':
                case 'textarea':
                  value = (commands as FormTextCommands).getValue();
                  break;
                case 'checkbox':
                  value = (commands as FormCheckboxCommands).getChecked();
                  break;
                case 'radio_group':
                  value = (commands as FormRadioGroupCommands<any>).getValue();
                  break;
                case 'select':
                  value = (commands as FormSelectCommands<any>).getValue();
                  break;
                default:
                  throw new Error('Unknown form control type');
              }

              finalValues[name] = value;
            } else {
              if (isAllValid) {
                commands.focus();
                isAllValid = false;
              }
            }
          }
        }

        if (isAllValid) {
          onSubmit?.(finalValues);
        }
      },
      [onSubmit]
    );

    const getControlCommands = useCallback(function <T extends FormControlCommands>(name: string) {
      return ifNull(formControls.current[name]?.commands, undefined) as T | undefined;
    }, []);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useForwardRef(
      ref,
      useMemo<FormCommands>(
        () => ({
          submit() {
            innerRef.current?.submit();
          },
          getControlCommands,
        }),
        [getControlCommands]
      )
    );
    /********************************************************************************************************************
     * Context
     * ******************************************************************************************************************/

    const contextValue = useMemo<FormContextValue>(
      () => ({
        titlePosition,
        titleWidth,
        hideTitle,
        disabled,
        addControl(type: FormControlType, name: string, commands: FormControlCommands | null) {
          formControls.current[name] = { type, commands, active: true };
        },
        removeControl(name: string) {
          if (formControls.current[name]) {
            formControls.current[name].active = false;
          }
        },
        getControlCommands,
      }),
      [disabled, getControlCommands, hideTitle, titlePosition, titleWidth]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormContextProvider value={contextValue}>
        <form className='Form' ref={innerRef} noValidate onSubmit={handleSubmit} {...props} />
      </FormContextProvider>
    );
  }
);

export default Form;
