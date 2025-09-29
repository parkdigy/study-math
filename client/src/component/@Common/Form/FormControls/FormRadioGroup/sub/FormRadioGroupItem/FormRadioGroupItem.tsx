import React, { CSSProperties } from 'react';
import { FormRadioGroupItemProps as Props } from './FormRadioGroupItem.types';
import { useResizeDetector } from 'react-resize-detector';
import './FormRadioGroupItem.scss';

const _iconSize = 20;
const _gap = 4;
const _iconLabelContainerStyle: CSSProperties = { gap: _gap };

export function FormRadioGroupItem<T extends string | number | boolean>({
  label,
  itemsKey,
  value,
  active,
  disabled,
  error,
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
    if (labelWidth) {
      onChangeWidth?.(labelWidth + _iconSize + _gap + 1); // 1:오차 보정
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labelWidth, itemsKey]);

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
      className={classnames('FormRadioGroupItem', disabled && 'FormRadioGroupItem-disabled')}
      tabIndex={0}
      onClick={disabled ? undefined : () => onClick(value)}
      onKeyDown={disabled ? undefined : (e) => (e.key === 'Enter' || e.key === ' ') && onClick(value)}
    >
      <div className='FormRadioGroupItem_IconLabelContainer' style={_iconLabelContainerStyle}>
        <Icon color={error ? 'error' : active ? 'primary' : 'opacity50'} size={_iconSize}>
          {active ? 'RadioButtonChecked' : 'RadioButtonUnchecked'}
        </Icon>
        <T ref={labelRef} size='lg'>
          {label}
        </T>
      </div>
    </div>
  );
}

export default React.memo(FormRadioGroupItem) as typeof FormRadioGroupItem;
