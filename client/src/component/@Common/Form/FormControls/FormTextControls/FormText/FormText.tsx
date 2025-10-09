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
import { FormInput } from './FormInput';

const FunctionKeys = [
  'Backspace',
  'Enter',
  'Escape',
  'Tab',
  'Shift',
  'Control',
  'Alt',
  'Meta',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Home',
  'End',
];

export const FormText = React.forwardRef<FormTextCommands, Props>(
  (
    {
      // FormTextProps
      $custom,
      $type,
      $commands,
      $controlHelperText,
      placeholder,
      hideEmptyErrorText,
      preventKeys: initPreventKeys,
      onCommands,
      onFinalValue,
      // FormInputProps
      type,
      clear: initClear = true,
      maxLength,
      autoComplete,
      autoCapitalize,
      autoCorrect,
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
    const [isFocus, setIsFocus] = useState(false);
    const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const disabled = initDisabled || formDisabled;

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const preventKeys = useMemo(() => {
      return initPreventKeys === undefined
        ? undefined
        : initPreventKeys.global
          ? initPreventKeys
          : new RegExp(initPreventKeys.source, `${initPreventKeys.flags}g`);
    }, [initPreventKeys]);

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
        let newValue = e.currentTarget.value;
        if (preventKeys) {
          newValue = newValue.replace(preventKeys, '');
        }
        if (onFinalValue) {
          newValue = onFinalValue(newValue);
        }

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
      [error, isRequiredError, onChange, onFinalValue, preventKeys, setError, setValidateTimeout, setValue, validate]
    );

    const handleClearClick = useCallback(() => {
      setValue('');
      focus();
    }, [focus, setValue]);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);
        onBlur?.(e);
        if (error) {
          validate();
        }
      },
      [error, onBlur, validate]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
          preventKeys &&
          !e.ctrlKey &&
          !e.metaKey &&
          !FunctionKeys.includes(e.key) &&
          new RegExp(preventKeys).test(e.key)
        ) {
          ll('prevent key', e.key);
          e.preventDefault();
        }
        onKeyDown?.(e);
      },
      [onKeyDown, preventKeys]
    );

    const handlePaste = useCallback(
      (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();

        const pastedText = e.clipboardData.getData('text');
        const cleanText = preventKeys ? pastedText.replace(preventKeys, '') : pastedText;
        const target = e.currentTarget;
        const start = ifNull(target.selectionStart, 0);
        const end = ifNull(target.selectionEnd, 0);
        const newValue = value.substring(0, start) + cleanText + value.substring(end);

        setValue(newValue);

        target.selectionStart = target.selectionEnd = start + cleanText.length;
      },
      [preventKeys, setValue, value]
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
        spacing={8}
        focused={isFocus}
        controlHelperText={$controlHelperText}
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
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          error={error !== false}
          endAdornment={endAdornment}
          clear={initClear && notEmpty(value)}
          onClearClick={handleClearClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={onKeyUp}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onPaste={handlePaste}
        />
      </FormControlBase>
    );
  }
);

export default FormText;
