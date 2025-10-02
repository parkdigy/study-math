import React, { CSSProperties } from 'react';
import { FormRadioGroupItemProps as Props } from './FormRadioGroupItem.types';
import { useResizeDetector } from 'react-resize-detector';
import { IconDefault, IconActive, IconError } from './icons';
import './FormRadioGroupItem.scss';

const _radioItemIconSize = 20;
const _radioItemGap = 8;
const _radioItemStyle: CSSProperties = { gap: _radioItemGap };

export function FormRadioGroupItem<T extends string | number | boolean>({
  type,
  label,
  itemsKey,
  value,
  active,
  disabled,
  error,
  buttonWidth,
  buttonFullWidth,
  onClick,
  onChangeWidth,
  onCommands,
}: Props<T>) {
  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: labelRef, width: labelWidth } = useResizeDetector({ handleHeight: false });

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const containerRef = useRef<HTMLDivElement>(null);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (labelWidth && !buttonFullWidth) {
      onChangeWidth?.(
        contains(['button', 'smallButton'], type) ? labelWidth : labelWidth + _radioItemIconSize + _radioItemGap + 1
      ); // 1:오차 보정
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, labelWidth, itemsKey]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  useEffect(() => {
    onCommands?.({
      focus() {
        containerRef.current?.focus();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div
      ref={containerRef}
      className={classnames('FormRadioGroupItem')}
      data-type={type}
      data-error={!!error}
      data-active={active}
    >
      {type === 'radio' ? (
        <div
          className='FormRadioGroupItemRadio'
          data-disabled={!!disabled}
          data-active={active}
          style={_radioItemStyle}
          tabIndex={disabled ? -1 : 0}
          onClick={disabled ? undefined : () => onClick(value)}
          onKeyDown={disabled ? undefined : (e) => (e.key === 'Enter' || e.key === ' ') && onClick(value)}
        >
          {error ? (
            <IconError width={20} height={22} />
          ) : active ? (
            <IconActive width={20} height={22} />
          ) : (
            <IconDefault
              width={20}
              height={22}
              fill={disabled ? 'var(--color-form-disabled-background)' : 'var(--color-form-background)'}
            />
          )}
          <T ref={labelRef}>{label}</T>
        </div>
      ) : (
        <div
          ref={labelRef}
          style={buttonFullWidth || buttonWidth ? { width: buttonFullWidth ? '100%' : buttonWidth } : undefined}
        >
          <div
            className='FormRadioGroupItemButton'
            data-disabled={!!disabled}
            tabIndex={disabled ? -1 : 0}
            onClick={disabled ? undefined : () => onClick(value)}
            onKeyDown={disabled ? undefined : (e) => (e.key === 'Enter' || e.key === ' ') && onClick(value)}
          >
            {label}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(FormRadioGroupItem) as typeof FormRadioGroupItem;
