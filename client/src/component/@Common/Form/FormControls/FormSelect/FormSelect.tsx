import React, { useRef } from 'react';
import { FormSelectCommands, FormSelectItem, FormSelectProps as Props } from './FormSelect.types';
import { FormControlBase } from '../@common';
import { useAutoUpdateRef, useAutoUpdateState, useFirstSkipEffect, useForwardRef, useRefState } from '@pdg/react-hook';
import { koreanAppendRul } from '@pdg/korean';
import { useFormControlGroupState, useFormState } from '../../FormContext';
import { FormSelectControl, FormSelectControlCommands } from './FormSelectControl';

export const FormSelect = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends string | number>(
    {
      // FormSelectProps
      size = 'normal',
      items,
      loading,
      placeholder,
      searchable,
      clearable,
      emptyItemText,
      loadingEmptyItemText,
      onFocus,
      onBlur,
      // FormControlCommonProps
      className,
      title,
      name,
      required,
      error: initError = false,
      disabled: initDisabled,
      value: initValue,
      onChange,
      onErrorChange,
      onValidate,
      // FormControlBaseProps
      width,
      minWidth = 80,
      ...formControlBaseProps
    }: Props<T>,
    ref: React.ForwardedRef<FormSelectCommands<T>>
  ) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    // const id = useId();
    const { disabled: formDisabled } = useFormState();
    const controlGroupState = useFormControlGroupState();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const itemsRef = useAutoUpdateRef<FormSelectItem<T>[] | undefined>(items);
    const controlCommandsRef = useRef<FormSelectControlCommands>(null);
    const onChangeRef = useAutoUpdateRef(onChange);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const getItemOfValue = useCallback(
      (value: T | undefined) => {
        return value === undefined ? undefined : itemsRef.current?.find((v) => v.value === value);
      },
      [itemsRef]
    );

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [activeItemRef, activeItem, _setActiveItem] = useRefState(() => getItemOfValue(initValue));
    const [error, setError] = useAutoUpdateState(initError);
    const [isFocus, setIsFocus] = useState(false);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const disabled = initDisabled || formDisabled;

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
      setActiveItem(getItemOfValue(initValue));
    }, [initValue]);

    useFirstSkipEffect(() => {
      if (error) {
        validate();
      }
    }, [activeItem]);

    useFirstSkipEffect(() => {
      onErrorChange?.(error);
      controlGroupState && controlGroupState.onErrorChange(name, error);
    }, [error]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    /** 포커스 */
    const focus = useCallback(() => {
      controlCommandsRef.current?.focus();
    }, []);

    /** 선택 아이템 설정 */
    const setActiveItem = useCallback(
      (item: FormSelectItem<T> | undefined) => {
        _setActiveItem(item);
        onChangeRef.current?.(item?.value);
      },
      [_setActiveItem, onChangeRef]
    );

    /** 유효성 검사 */
    const validate = useCallback(() => {
      let error: string | boolean = false;

      if (required && activeItemRef.current === undefined) {
        if (notEmpty(title)) {
          error = `${koreanAppendRul(title)} 선택하지 않았습니다.`;
        } else {
          error = '필수 선택 항목입니다.';
        }
      }

      if (error === false && onValidate) {
        error = onValidate(activeItemRef.current?.value);
      }

      if (error === false) {
        setError(false);
        return true;
      } else {
        setError(error);
        return false;
      }
    }, [activeItemRef, onValidate, required, setError, title]);

    /** 값 가져오기 */
    const getValue = useCallback(() => {
      return activeItemRef.current?.value;
    }, [activeItemRef]);

    /** 값 설정 */
    const setValue = useCallback(
      (newValue: T | undefined) => {
        setActiveItem(getItemOfValue(newValue));
      },
      [getItemOfValue, setActiveItem]
    );

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<FormSelectCommands<T>>(
      () => ({ focus, validate, setError, getValue, setValue }),
      [focus, getValue, setError, setValue, validate]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleControlCommands = useCallback((commands: FormSelectControlCommands) => {
      controlCommandsRef.current = commands;
    }, []);

    const handleFocus = useCallback(() => {
      setIsFocus(true);
      ll('focus');
      onFocus?.();
    }, [onFocus]);

    const handleBlur = useCallback(() => {
      setIsFocus(false);
      ll('blur');
      onBlur?.();
    }, [onBlur]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormControlBase
        className={classnames(className, 'FormSelect')}
        type='select'
        name={name}
        commands={commands}
        title={title}
        required={required}
        disabled={disabled}
        error={error}
        width={width}
        minWidth={width === undefined ? minWidth : undefined}
        spacing={8}
        focused={isFocus}
        {...formControlBaseProps}
      >
        <FormSelectControl
          size={size}
          disabled={disabled}
          error={error !== false}
          loading={loading}
          searchable={searchable}
          clearable={clearable}
          placeholder={placeholder}
          emptyItemText={emptyItemText}
          loadingEmptyItemText={loadingEmptyItemText}
          items={items}
          itemLabel={activeItem?.label}
          activeItem={activeItem}
          onActiveItem={setActiveItem}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCommands={handleControlCommands}
        />
      </FormControlBase>
    );
  })
);

export default FormSelect;
