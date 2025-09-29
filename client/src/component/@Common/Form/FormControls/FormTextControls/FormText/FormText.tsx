import React from 'react';
import { FormTextCommands, FormTextProps as Props } from './FormText.types';
import { FormControlBase } from '../../@common';
import {
  useAutoUpdateRefState,
  useAutoUpdateState,
  useFirstSkipEffect,
  useForwardRef,
  useTimeoutRef,
} from '@pdg/react-hook';
import { koreanAppendRul } from '@pdg/korean';
import { useFormControlGroupState, useFormState } from '../../../FormContext';
import { FormInput } from './sub';

export const FormText = React.forwardRef<FormTextCommands, Props>(
  (
    {
      // FormTextProps
      $custom,
      $type,
      $commands,
      placeholder,
      hideEmptyErrorText,
      preventKeys,
      onCommands,
      onFinalValue,
      // FormInputProps
      type,
      clear: initClear = true,
      maxLength,
      endAdornment,
      onFocus,
      onBlur,
      onKeyUp,
      onKeyDown,
      // FormControlCommonProps
      className,
      name,
      title,
      required,
      disabled: initDisabled,
      error: initError = false,
      value: initValue = '',
      onChange,
      onErrorChange,
      onValidate,
      // FormControlBaseProps
      ...formControlBaseProps
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const { disabled: formDisabled } = useFormState();
    const controlGroupState = useFormControlGroupState();

    /********************************************************************************************************************
     * Timeout
     * ******************************************************************************************************************/

    const [, setValidateTimeout] = useTimeoutRef();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLInputElement>(null);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState(initError);
    const [isRequiredError, setIsRequiredError] = useState(false);
    const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue);

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

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const focus = useCallback(() => {
      innerRef.current?.focus();
    }, []);

    const validate = useCallback(() => {
      const currentValue = ifUndefined(valueRef.current, '');
      let error: string | boolean = false;
      let isRequiredError = false;

      if (required && empty(currentValue)) {
        isRequiredError = true;
        if (hideEmptyErrorText) {
          error = true;
        } else {
          if (notEmpty(title)) {
            error = `${koreanAppendRul(title)} 입력하지 않았습니다.`;
          } else {
            error = '필수 입력 항목입니다.';
          }
        }
      }
      if (error === false && onValidate) {
        error = onValidate(currentValue);
      }

      if (error === false) {
        setError(false);
        setIsRequiredError(false);
        return true;
      } else {
        setError(error);
        setIsRequiredError(isRequiredError);
        return false;
      }
    }, [hideEmptyErrorText, onValidate, required, setError, title, valueRef]);

    const getValue = useCallback(() => {
      return ifNullOrUndefined(valueRef.current, '');
    }, [valueRef]);

    const setValue = useCallback(
      (newValue: string) => {
        _setValue(newValue);
        onChange?.(newValue);
      },
      [_setValue, onChange]
    );

    const clear = useCallback(() => {
      _setValue('');
      onChange?.('');
    }, [_setValue, onChange]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<FormTextCommands>(
      () => ({ focus, validate, setError, getValue, setValue, clear }),
      [clear, focus, getValue, setError, setValue, validate]
    );

    useForwardRef(ref, commands);

    useEffect(() => {
      onCommands?.(commands);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [commands]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = onFinalValue ? onFinalValue(e.currentTarget.value) : e.currentTarget.value;

        setValue(newValue);

        if (error !== false) {
          if (isRequiredError && notEmpty(newValue)) {
            setError(false);
            setIsRequiredError(false);
          } else {
            setValidateTimeout(() => {
              validate();
            }, 500);
          }
        }

        onChange?.(newValue);
      },
      [error, isRequiredError, onChange, onFinalValue, setError, setValidateTimeout, setValue, validate]
    );

    const handleClearClick = useCallback(() => {
      setValue('');
      focus();
    }, [focus, setValue]);

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(e);
        if (error) {
          validate();
        }
      },
      [error, onBlur, validate]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (preventKeys && preventKeys.test(e.key)) {
          e.preventDefault();
        }
        onKeyDown?.(e);
      },
      [onKeyDown, preventKeys]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormControlBase
        className={classnames(className, 'FormText')}
        type={$custom && $type ? $type : 'text'}
        name={name}
        commands={$custom ? ifUndefined($commands, null) : commands}
        title={title}
        error={error}
        required={required}
        disabled={disabled}
        {...formControlBaseProps}
      >
        <FormInput
          ref={innerRef}
          type={type}
          formNoValidate={true}
          name={name}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          error={error !== false}
          endAdornment={endAdornment}
          clear={initClear && notEmpty(value)}
          onClearClick={handleClearClick}
          onFocus={onFocus}
          onBlur={handleBlur}
          onKeyUp={onKeyUp}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </FormControlBase>
    );
  }
);

export default FormText;
