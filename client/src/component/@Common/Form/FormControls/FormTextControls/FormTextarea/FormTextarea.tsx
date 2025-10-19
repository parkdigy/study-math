import React from 'react';
import { FormTextareaCommands, FormTextareaProps as Props } from './FormTextarea.types';
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
import './FormTextarea.scss';

export const FormTextarea = React.forwardRef<FormTextareaCommands, Props>(
  (
    {
      // FormTextareaProps
      placeholder,
      hideEmptyErrorText,
      onFinalValue,
      // HTMLTextareaProps
      maxLength,
      rows = 5,
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

    const innerRef = useRef<HTMLTextAreaElement>(null);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState(initError);
    const [isRequiredError, setIsRequiredError] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
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

    const commands = useMemo<FormTextareaCommands>(
      () => ({ focus, validate, setError, getValue, setValue, clear }),
      [clear, focus, getValue, setError, setValue, validate]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocus(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocus(false);
        onBlur?.(e);
        if (error) {
          validate();
        }
      },
      [error, onBlur, validate]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormControlBase
        className={classnames(className, 'FormTextarea')}
        type='textarea'
        name={name}
        commands={commands}
        title={title}
        error={error}
        required={required}
        disabled={disabled}
        gap={8}
        focused={isFocus}
        {...formControlBaseProps}
      >
        <textarea
          className={classnames(
            'FormTextarea_textarea',
            isFocus && 'FormTextarea_textarea-focused',
            disabled && 'FormTextarea_textarea-disabled',
            error !== false && 'FormTextarea_textarea-error'
          )}
          ref={innerRef}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          rows={rows}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
        >
          {value}
        </textarea>
      </FormControlBase>
    );
  }
);

export default FormTextarea;
