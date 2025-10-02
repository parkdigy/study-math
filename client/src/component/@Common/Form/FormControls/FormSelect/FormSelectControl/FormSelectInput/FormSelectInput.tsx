import React from 'react';
import { FormSelectInputCommands, FormSelectInputProps as Props } from './FormSelectInput.types';
import { FormSelectRight } from '../FormSelectRight';
import './FormSelectInput.scss';

const FormSelectInput = ({
  id,
  size,
  show,
  itemLabel,
  placeholder,
  disabled,
  loading,
  isOpenDropdown,
  error,
  searchable,
  clearable,
  onNextItem,
  onPrevItem,
  onEnter,
  onFocus,
  onBlur,
  onChangeValue,
  onClear,
  onCommands,
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const inputRef = useRef<HTMLInputElement>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState('');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    onChangeValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormSelectInputCommands>(
    () => ({
      focus() {
        inputRef.current?.focus();
      },
      clearValue() {
        setValue('');
      },
    }),
    []
  );

  useEffect(() => {
    onCommands(commands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commands]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur(e);
    },
    [onBlur]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (contains(['Tab'], e.key)) {
        // 기본 동작 수행
      } else if (contains(['ArrowDown', 'ArrowUp', 'Enter'], e.key)) {
        e.preventDefault();

        if (e.key === 'ArrowDown') {
          onNextItem();
        } else if (e.key === 'ArrowUp') {
          onPrevItem();
        } else if (e.key === 'Enter') {
          onEnter();
        }
      } else if (!searchable) {
        e.preventDefault();
      }
    },
    [onEnter, onNextItem, onPrevItem, searchable]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className={classnames('FormSearchInputWrapper')} data-size={size} data-show={show}>
      <input
        ref={inputRef}
        className={classnames('FormSelectInput', `FormSelectInput__${id}`)}
        data-size={size}
        data-show={show}
        data-error={error}
        data-selected={itemLabel !== undefined}
        name={id}
        autoComplete='off'
        tabIndex={0}
        placeholder={ifUndefined(itemLabel, placeholder)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {show && (
        <FormSelectRight
          size={size}
          isFocused
          isOpenDropdown={isOpenDropdown}
          loading={loading}
          showClear={itemLabel !== undefined}
          clearable={clearable}
          onClear={onClear}
        />
      )}
    </div>
  );
};

export default React.memo(FormSelectInput) as typeof FormSelectInput;
