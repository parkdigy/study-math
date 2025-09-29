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
     * State
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
      onErrorChange?.(error);
      controlGroupState && controlGroupState.onErrorChange(name, error);
    }, [error]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands: FormCheckboxCommands = useMemo(
      () => ({
        focus() {
          innerRef.current?.focus();
        },
        validate() {
          let error: string | boolean = false;

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
        },
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
      [_setChecked, checkedRef, onChangeRef, onValidateRef, setError]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormControlBase
        className={classnames(
          className,
          'FormCheckbox',
          disabled && 'FormCheckbox-disabled',
          error === false && 'FormCheckbox-error'
        )}
        type='checkbox'
        name={name}
        commands={commands}
        error={error}
        disabled={disabled}
        {...formControlBaseProps}
      >
        <div
          ref={innerRef}
          className='FormCheckboxControl'
          tabIndex={0}
          onClick={disabled ? undefined : commands.toggle}
          onKeyDown={disabled ? undefined : (e) => (e.key === 'Enter' || e.key === ' ') && commands.toggle()}
        >
          {type === 'checkbox' ? (
            // 체크박스 아이콘
            <Icon size={20}>{checked ? 'CheckBox' : 'CheckBoxOutlineBlank'}</Icon>
          ) : (
            // 스위치 아이콘
            <Icon size={50} color={checked ? 'primary' : undefined} mv={-10}>
              {checked ? 'ToggleOn' : 'ToggleOff'}
            </Icon>
          )}

          {/* 라벨 */}
          <div className='FormCheckboxLabel'>{label}</div>
        </div>
      </FormControlBase>
    );
  }
);

export default FormCheckbox;
