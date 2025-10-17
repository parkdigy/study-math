import React, { useRef } from 'react';
import { FormSelectControlCommands, FormSelectControlProps as Props } from './FormSelectControl.types';
import { FormSelectInput, FormSelectInputCommands } from './FormSelectInput';
import { useFirstSkipEffect, useRefState, useTimeoutRef } from '@pdg/react-hook';
import { FormSelectItem } from '../FormSelect.types';
import { FormSelectDropdown, FormSelectDropdownCommands } from './FormSelectDropdown';
import { FormSelectRight } from './FormSelectRight';
import './FormSelectControl.scss';

function FormSelectControl<T extends string | number>({
  size,
  loading,
  disabled,
  error,
  searchable,
  clearable,
  placeholder,
  itemLabel,
  items,
  emptyItemText,
  loadingEmptyItemText,
  activeItem,
  onActiveItem,
  onFocus,
  onBlur,
  onOpenDropdown,
  onCommands,
}: Props<T>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const id = useId();

  /********************************************************************************************************************
   * Timeout
   * ******************************************************************************************************************/

  const [, setIsFocusedTimeout] = useTimeoutRef();
  const [, setFocusTimeout] = useTimeoutRef();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dropdownCommandsRef = useRef<FormSelectDropdownCommands<T>>(null);
  const inputCommandsRef = useRef<FormSelectInputCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isShowInput, setIsShowInput] = useState(false);
  const [isFocused, _setIsFocused] = useState(false);
  const [isOpenDropdownRef, isOpenDropdown, setIsOpenDropdown] = useRefState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useFirstSkipEffect(() => {
    if (isFocused) {
      onFocus?.();
    } else {
      onBlur?.();
    }
  }, [isFocused]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormSelectControlCommands>(
    () => ({
      focus() {
        setFocusTimeout(() => {
          inputCommandsRef.current?.focus();
        });
      },
    }),
    [setFocusTimeout]
  );

  useEffect(() => {
    onCommands(commands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commands]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 포커스 상태 설정 */
  const setIsFocused = useCallback(
    (newIsFocused: boolean) => {
      setIsFocusedTimeout(() => {
        _setIsFocused(newIsFocused);
      });
    },
    [setIsFocusedTimeout]
  );

  /** 선택 아이템 해제 */
  const clear = useCallback(() => {
    onActiveItem(undefined);
    commands.focus();
  }, [commands, onActiveItem]);

  /** 드롭다운 열기 */
  const openDropdown = useCallback(() => {
    if (onOpenDropdown ? !onOpenDropdown() : true) {
      setIsOpenDropdown(true);
      commands.focus();
      if (searchable) {
        setIsShowInput(true);
      }
    }
  }, [commands, onOpenDropdown, searchable, setIsOpenDropdown]);

  /** 드롭다운 닫기 */
  const closeDropdown = useCallback(() => {
    setIsOpenDropdown(false);
    setIsShowInput(false);
    inputCommandsRef.current?.clearValue();
  }, [setIsOpenDropdown]);

  /** 드롭다운 열기/닫기 전환 */
  const toggleDropdown = useCallback(() => {
    if (isOpenDropdownRef.current) {
      closeDropdown();
      commands.focus();
    } else {
      openDropdown();
    }
  }, [closeDropdown, commands, isOpenDropdownRef, openDropdown]);

  /** 다음 드롭다운 아이템으로 이동 */
  const nextDropdownItem = useCallback(() => {
    if (isOpenDropdownRef.current) {
      dropdownCommandsRef.current?.nextItem();
    } else {
      openDropdown();
    }
  }, [isOpenDropdownRef, openDropdown]);

  /** 이전 드롭다운 아이템으로 이동 */
  const prevDropdownItem = useCallback(() => {
    if (isOpenDropdownRef.current) {
      dropdownCommandsRef.current?.prevItem();
    } else {
      openDropdown();
    }
  }, [isOpenDropdownRef, openDropdown]);

  /** 현재 드롭다운 아이템 선택 */
  const selectDropdownItem = useCallback(() => {
    if (isOpenDropdownRef.current) {
      onActiveItem(dropdownCommandsRef.current?.getTempActiveItem());
      closeDropdown();
    } else {
      openDropdown();
    }
  }, [closeDropdown, isOpenDropdownRef, onActiveItem, openDropdown]);

  /********************************************************************************************************************
   * Event Handler - Input
   * ******************************************************************************************************************/

  /** Input Focus */
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  /** Input Blur */
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    nextTick(() => {
      if (document.hasFocus()) {
        if (
          document.activeElement?.className.includes(`FormSelectInput-${id}`) ||
          document.activeElement?.className.includes(`FormSelectDropdownItem-${id}`)
        ) {
          inputCommandsRef.current?.focus();
          return;
        }
      }

      closeDropdown();
    });
  }, [closeDropdown, id, setIsFocused]);

  /** Input Change Value */
  const handleInputChangeValue = useCallback(
    (value: string) => {
      if (!isOpenDropdownRef.current && notEmpty(value)) {
        openDropdown();
      }
      dropdownCommandsRef.current?.setSearchKeyword(value);
    },
    [isOpenDropdownRef, openDropdown]
  );

  /** Input Commands */
  const handleInputCommands = useCallback((commands: FormSelectInputCommands) => {
    inputCommandsRef.current = commands;
  }, []);

  /********************************************************************************************************************
   * Event Handler - 드롭다운
   * ******************************************************************************************************************/

  /** 드롭다운에서 아이템 클릭 */
  const handleDropdownClick = useCallback(
    (item: FormSelectItem<T>) => {
      onActiveItem(item);
      closeDropdown();
    },
    [closeDropdown, onActiveItem]
  );

  /** 드롭다운 Commands */
  const handleDropdownCommands = useCallback((commands: FormSelectDropdownCommands<T>) => {
    dropdownCommandsRef.current = commands;
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <div
        className={classnames(
          'FormSelectControl',
          `FormSelectControl-size-${size}`,
          !isShowInput && 'FormSelectControl-show',
          isFocused && 'FormSelectControl-focused',
          disabled && 'FormSelectControl-disabled',
          error && 'FormSelectControl-error'
        )}
        tabIndex={-1}
        onMouseDown={disabled ? undefined : toggleDropdown}
      >
        {/* 입력창 */}
        <FormSelectInput
          id={id}
          size={size}
          show={isShowInput}
          itemLabel={itemLabel}
          placeholder={placeholder}
          disabled={disabled}
          loading={loading}
          isOpenDropdown={isOpenDropdown}
          error={error}
          searchable={searchable}
          clearable={clearable}
          onNextItem={nextDropdownItem}
          onPrevItem={prevDropdownItem}
          onEnter={selectDropdownItem}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeValue={handleInputChangeValue}
          onClear={clear}
          onCommands={handleInputCommands}
        />

        {/* 라벨 */}
        {!isShowInput && (
          <div className={classnames('FormSelectControl__Label', !itemLabel && 'FormSelectControl__Placeholder')}>
            &nbsp;
            <div>{ifUndefined(itemLabel, ifEmpty(placeholder, <>&nbsp;</>))}</div>
          </div>
        )}

        {!isShowInput && (
          <FormSelectRight
            size={size}
            isFocused={isFocused}
            isOpenDropdown={isOpenDropdown}
            loading={loading}
            clearable={clearable}
            showClear={activeItem !== undefined}
            onClear={clear}
          />
        )}
      </div>

      {/* 드롭다운 */}
      <FormSelectDropdown
        id={id}
        items={items}
        activeItem={activeItem}
        searchable={searchable}
        loading={loading}
        emptyItemText={emptyItemText}
        loadingEmptyItemText={loadingEmptyItemText}
        isOpen={isOpenDropdown}
        onClick={handleDropdownClick}
        onCommands={handleDropdownCommands}
      />
    </>
  );
}

export default FormSelectControl;
