import React from 'react';
import { FormPasswordCommands, FormPasswordProps as Props } from './FormPassword.types';
import { useAutoUpdateState, useForwardRef, useTimeoutRef } from '@pdg/react-hook';
import { useFormState } from '../../../FormContext';
import { FormText, FormTextCommands } from '../FormText';
import { RuleCheck } from './RuleCheck';
import { ShowButton } from './ShowButton';

export const FormPassword = React.forwardRef<FormPasswordCommands, Props>(
  (
    {
      className,
      name,
      value: initValue,
      error: initError = false,
      disabled,
      rules,
      linkName,
      onChange,
      onErrorChange,
      onValidate,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const { getControlCommands } = useFormState();

    /********************************************************************************************************************
     * Timeout
     * ******************************************************************************************************************/

    const [, setUpdateValueRulesTimeout] = useTimeoutRef();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [value, setValue] = useAutoUpdateState(initValue);
    const [textCommands, setTextCommands] = useState<FormTextCommands>();
    const [error, _setError] = useAutoUpdateState(initError);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isContainsAlphabet, setIsContainsAlphabet] = useState(false);
    const [isContainsNumeric, setIsContainsNumeric] = useState(false);
    const [isContainsSpecialChar, setIsContainsSpecialChar] = useState(false);
    const [isOverLength, setIsOverLength] = useState(false);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const controlHelperText = useMemo(() => {
      if (rules) {
        return (
          <Stack row center spacing={10} wrap>
            <RuleCheck title='대소문자' checked={isContainsAlphabet} error={error !== false} />
            <RuleCheck title='숫자' checked={isContainsNumeric} error={error !== false} />
            <RuleCheck title='특수문자' checked={isContainsSpecialChar} error={error !== false} />
            <RuleCheck title='8자리 이상' checked={isOverLength} error={error !== false} />
          </Stack>
        );
      }
    }, [error, isContainsAlphabet, isContainsNumeric, isContainsSpecialChar, isOverLength, rules]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      setUpdateValueRulesTimeout(() => {
        setIsContainsAlphabet(notEmpty(value) && new RegExp(/[A-Z]/).test(value) && new RegExp(/[a-z]/).test(value));
        setIsContainsNumeric(notEmpty(value) && new RegExp(/[\d]/i).test(value));
        setIsContainsSpecialChar(notEmpty(value) && new RegExp(/[`~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/i).test(value));
        setIsOverLength(notEmpty(value) && value.length >= 8);
      }, 100);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const setError = useCallback(
      (newError: string | boolean) => {
        _setError(newError);
        onErrorChange?.(newError);
      },
      [_setError, onErrorChange]
    );

    useEffect(() => {
      if (
        rules &&
        error !== false &&
        isContainsSpecialChar &&
        isContainsAlphabet &&
        isContainsNumeric &&
        isOverLength
      ) {
        textCommands?.setError(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rules, isContainsAlphabet, isContainsNumeric, isContainsSpecialChar, isOverLength]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<FormPasswordCommands | null>(() => (textCommands ? textCommands : null), [textCommands]);

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (newValue: string) => {
        setValue(newValue);
        onChange?.(newValue);
      },
      [onChange, setValue]
    );

    const handleShowButtonClick = useCallback(() => {
      setIsShowPassword((prev) => !prev);
      textCommands?.focus();
    }, [textCommands]);

    const handleValidate = useCallback(
      (value: string) => {
        if (rules && (!isContainsAlphabet || !isContainsNumeric || !isContainsSpecialChar || !isOverLength)) {
          return true;
        }

        let error: string | boolean = false;

        if (onValidate) {
          error = onValidate(value);
        }

        if (error === false && linkName) {
          const formControl = getControlCommands<FormPasswordCommands>(linkName);
          if (formControl && formControl.getValue() !== value) {
            error = '비밀번호가 일치하지 않습니다.';
          }
        }

        return error;
      },
      [
        getControlCommands,
        isContainsAlphabet,
        isContainsNumeric,
        isContainsSpecialChar,
        isOverLength,
        linkName,
        onValidate,
        rules,
      ]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormText
        $custom
        $type='password'
        $commands={commands}
        $controlHelperText={controlHelperText}
        type={isShowPassword && !disabled ? 'text' : 'password'}
        className={classnames(className, 'FormPassword')}
        name={name}
        clear={false}
        endAdornment={
          notEmpty(value) && !disabled ? (
            <ShowButton active={isShowPassword} onClick={handleShowButtonClick} />
          ) : undefined
        }
        value={value}
        hideRequiredErrorText={rules}
        error={error}
        disabled={disabled}
        onErrorChange={setError}
        onChange={handleChange}
        onCommands={setTextCommands}
        onValidate={handleValidate}
        {...props}
      />
    );
  }
);

export default FormPassword;
