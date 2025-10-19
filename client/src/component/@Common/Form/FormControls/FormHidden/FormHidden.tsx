import React from 'react';
import { FormHiddenCommands, FormHiddenProps as Props } from './FormHidden.types';
import { useFormState } from '../../FormContext';
import { useAutoUpdateRef, useAutoUpdateRefState, useForwardRef } from '@pdg/react-hook';
import { FormControlBase, FormControlCommands } from '../@common';

export const FormHidden = React.forwardRef<FormHiddenCommands, Props>(
  (
    {
      // FormControlCommonProps
      className,
      name,
      onChange,
      value: initValue,
      disabled: initDisabled,
      // FormControlBaseProps
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const { disabled: formDisabled } = useFormState();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLInputElement>(null);
    const onChangeRef = useAutoUpdateRef(onChange);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [valueRef, value, setValue] = useAutoUpdateRefState(ifUndefined(initValue, ''));

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const disabled = initDisabled || formDisabled;

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands: FormControlCommands & FormHiddenCommands = useMemo(
      () => ({
        focus() {
          innerRef.current?.focus();
        },
        getValue() {
          return valueRef.current;
        },
        setValue(newValue) {
          setValue(ifUndefined(newValue, ''));
          onChangeRef.current?.(ifUndefined(newValue, ''));
        },
        validate() {
          return true;
        },
        setError() {},
      }),
      [setValue, valueRef, onChangeRef]
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
        hiddenControl
        gap={12}
        name={name}
        commands={commands}
        disabled={disabled}
        {...props}
      >
        <input type='hidden' value={value} onChange={handleChange} />
      </FormControlBase>
    );
  }
);

export default FormHidden;
