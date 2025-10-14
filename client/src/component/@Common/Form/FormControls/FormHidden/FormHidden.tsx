import React from 'react';
import { FormHiddenCommands, FormHiddenProps as Props } from './FormHidden.types';
import { useFormControlGroupState, useFormState } from '../../FormContext';
import {
  useAutoUpdateRef,
  useAutoUpdateRefState,
  useAutoUpdateState,
  useFirstSkipEffect,
  useForwardRef,
} from '@pdg/react-hook';
import { koreanAppendRul } from '@pdg/korean';
import { FormControlBase } from '../@common';

export const FormHidden = React.forwardRef<FormHiddenCommands, Props>(
  (
    {
      // FormHiddenProps
      requiredErrorText,
      // FormControlCommonProps
      className,
      title,
      name,
      onValidate,
      onChange,
      value: initValue,
      error: initError = false,
      required,
      disabled: initDisabled,
      onErrorChange,
      // FormControlBaseProps
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const { disabled: formDisabled } = useFormState();
    const controlGroupState = useFormControlGroupState();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLInputElement>(null);
    const onValidateRef = useAutoUpdateRef(onValidate);
    const onChangeRef = useAutoUpdateRef(onChange);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [valueRef, value, setValue] = useAutoUpdateRefState(ifUndefined(initValue, ''));
    const [error, setError] = useAutoUpdateState(initError);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const disabled = initDisabled || formDisabled;

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
      onErrorChange?.(error);
      controlGroupState && controlGroupState.onErrorChange(name, error);
    }, [error]);

    useFirstSkipEffect(() => {
      if (error) {
        validate();
      }
    }, [value]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const validate = useCallback(() => {
      let error: string | boolean = false;

      if (required && !valueRef.current) {
        if (requiredErrorText !== undefined) {
          error = requiredErrorText;
        } else {
          if (notEmpty(title)) {
            error = `${koreanAppendRul(title)} 확인하지 않았습니다.`;
          } else {
            error = '필수 확인 항목입니다.';
          }
        }
      }

      if (onValidateRef.current) {
        error = onValidateRef.current(valueRef.current);
      }

      if (error === false) {
        setError(false);
        return true;
      } else {
        setError(error);
        return false;
      }
    }, [valueRef, onValidateRef, required, requiredErrorText, setError, title]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands: FormHiddenCommands = useMemo(
      () => ({
        focus() {
          innerRef.current?.focus();
        },
        validate,
        setError,
        getValue() {
          return valueRef.current;
        },
        setValue(newValue) {
          setValue(ifUndefined(newValue, ''));
          onChangeRef.current?.(ifUndefined(newValue, ''));
        },
      }),
      [setValue, valueRef, onChangeRef, setError, validate]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);
        onChangeRef.current?.(ifUndefined(newValue, ''));
      },
      [onChangeRef, setValue]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormControlBase
        className={classnames(className, 'FormHidden')}
        type='hidden'
        title={title}
        spacing={12}
        name={name}
        commands={commands}
        required={required}
        error={error}
        disabled={disabled}
        {...props}
      >
        <input type='hidden' value={value} onChange={handleChange} />
      </FormControlBase>
    );
  }
);

export default FormHidden;
