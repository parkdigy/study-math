import React from 'react';
import { FormCheckboxCommands, FormCheckboxProps as Props } from './FormCheckbox.types';
import { FormControlBase } from '../@common';
import {
  useAutoUpdateRef,
  useAutoUpdateRefState,
  useAutoUpdateState,
  useFirstSkipEffect,
  useForwardRef,
} from '@pdg/react-hook';
import { useFormControlGroupState, useFormState } from '../../FormContext';
import { IconActive, IconDefault, IconError, IconSwitchActive, IconSwitchDefault } from './icons';
import { koreanAppendRul } from '@pdg/korean';
import './FormCheckbox.scss';

export const FormCheckbox = React.forwardRef<FormCheckboxCommands, Props>(
  (
    {
      // FormCheckboxProps
      type = 'checkbox',
      label,
      disabled: initDisabled,
      checked: initChecked = false,
      onChange,
      // FormControlCommonProps
      className,
      name,
      error: initError = false,
      onErrorChange,
      onValidate,
      // FormControlBaseProps
      title,
      required,
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
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLDivElement>(null);
    const onValidateRef = useAutoUpdateRef(onValidate);
    const onChangeRef = useAutoUpdateRef(onChange);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [checkedRef, checked, _setChecked] = useAutoUpdateRefState(initChecked);
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
    }, [checked]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const validate = useCallback(() => {
      let error: string | boolean = false;

      if (required && !checkedRef.current) {
        if (notEmpty(title)) {
          error = `${koreanAppendRul(title)} 확인하지 않았습니다.`;
        } else {
          error = '필수 확인 항목입니다.';
        }
      }

      if (onValidateRef.current) {
        error = onValidateRef.current(checkedRef.current);
      }

      if (error === false) {
        setError(false);
        return true;
      } else {
        setError(error);
        return false;
      }
    }, [checkedRef, onValidateRef, required, setError, title]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands: FormCheckboxCommands = useMemo(
      () => ({
        focus() {
          innerRef.current?.focus();
        },
        validate,
        setError,
        getChecked() {
          return checkedRef.current;
        },
        setChecked(newChecked) {
          _setChecked(newChecked);
          onChangeRef.current?.(newChecked);
        },
        toggle() {
          commands.setChecked(!checkedRef.current);
        },
      }),
      [_setChecked, checkedRef, onChangeRef, setError, validate]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormControlBase
        className={classnames(className, 'FormCheckbox')}
        type='checkbox'
        title={title}
        spacing={12}
        name={name}
        commands={commands}
        required={required}
        error={error}
        disabled={disabled}
        {...formControlBaseProps}
      >
        <div
          ref={innerRef}
          className='FormCheckboxControl'
          data-disabled={disabled}
          data-error={error !== false}
          tabIndex={0}
          onClick={disabled ? undefined : commands.toggle}
          onKeyDown={disabled ? undefined : (e) => (e.key === 'Enter' || e.key === ' ') && commands.toggle()}
        >
          {type === 'checkbox' ? (
            // 체크박스 아이콘
            <Img src={error ? IconError : checked ? IconActive : IconDefault} width={20} height={22} />
          ) : (
            // 스위치 아이콘
            <Img src={checked ? IconSwitchActive : IconSwitchDefault} width={50} height={30} />
          )}

          {/* 라벨 */}
          <div className='FormCheckboxLabel'>{label}</div>
        </div>
      </FormControlBase>
    );
  }
);

export default FormCheckbox;
