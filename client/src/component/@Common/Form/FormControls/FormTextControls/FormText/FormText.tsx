import React from 'react';
import { FormTextCommands, FormTextProps as Props } from './FormText.types';
import { FormControlBase } from '../../@common';
import {
  useAutoUpdateRef,
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
      hideRequiredErrorText,
      requiredErrorText,
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
    const lastPreventKeysRef = useRef<RegExp>(undefined);
    const onFinalValueRef = useAutoUpdateRef(onFinalValue);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const preventKeys = useMemo(() => {
      if (initPreventKeys) {
        const finalPreventKeys = initPreventKeys.global
          ? initPreventKeys
          : new RegExp(initPreventKeys.source, `${initPreventKeys.flags}g`);

        if (
          lastPreventKeysRef.current &&
          finalPreventKeys.source === lastPreventKeysRef.current.source &&
          finalPreventKeys.flags === lastPreventKeysRef.current.flags
        ) {
          return lastPreventKeysRef.current;
        } else {
          lastPreventKeysRef.current = finalPreventKeys;
          return finalPreventKeys;
        }
      } else {
        lastPreventKeysRef.current = undefined;
        return undefined;
      }
    }, [initPreventKeys]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      (newValue: string | undefined) => {
        if (newValue) {
          if (preventKeys) {
            newValue = newValue.replace(preventKeys, '');
          }
          if (onFinalValueRef.current) {
            newValue = onFinalValueRef.current(newValue);
          }
        } else {
          newValue = '';
        }
        return newValue ?? '';
      },
      [onFinalValueRef, preventKeys]
    );

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState(initError);
    const [isRequiredError, setIsRequiredError] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);

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
        if (hideRequiredErrorText) {
          error = true;
        } else {
          if (requiredErrorText !== undefined) {
            error = requiredErrorText;
          } else {
            if (notEmpty(title)) {
              error = `${koreanAppendRul(title)} 입력해 주세요.`;
            } else {
              error = '필수 입력 항목입니다.';
            }
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
    }, [hideRequiredErrorText, onValidate, required, requiredErrorText, setError, title, valueRef]);

    const getValue = useCallback(() => {
      return ifNullOrUndefined(valueRef.current, '');
    }, [valueRef]);

    const setValue = useCallback(
      (newValue: string) => {
        newValue = getFinalValue(newValue);
        _setValue(newValue);
        onChange?.(newValue);
        if (error) {
          validate();
        }
      },
      [_setValue, error, getFinalValue, onChange, validate]
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
        const newValue = getFinalValue(e.currentTarget.value);
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
      [error, getFinalValue, isRequiredError, onChange, setError, setValidateTimeout, setValue, validate]
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
        let cleanText = preventKeys ? pastedText.replace(new RegExp(preventKeys), '') : pastedText;
        if (maxLength) {
          cleanText = cleanText.substring(0, maxLength);
        }
        const target = e.currentTarget;
        const start = ifNull(target.selectionStart, 0);
        const end = ifNull(target.selectionEnd, 0);
        const newValue = value.substring(0, start) + cleanText + value.substring(end);

        setValue(newValue);

        target.selectionStart = target.selectionEnd = start + cleanText.length;
      },
      [maxLength, preventKeys, setValue, value]
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
