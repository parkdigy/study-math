import React from 'react';
import { FormSelectDropdownItemProps as Props } from './FormSelectDropdownItem.types';
import './FormSelectDropdownItem.scss';

export function FormSelectDropdownItem<T extends string | number>({
  id,
  info,
  active,
  tempActive,
  onActive,
  onClick,
}: Props<T>) {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleMouseEnter = useCallback(() => {
    onActive(info);
  }, [info, onActive]);

  const handleClick = useCallback(() => {
    onClick(info);
  }, [info, onClick]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Box
      className={classnames('FormSelectDropdownItem', `FormSelectDropdownItem__${id}`)}
      data-disabled={info.disabled}
      data-active={active}
      data-temp-active={tempActive}
      tabIndex={-1}
      onMouseEnter={info.disabled ? undefined : handleMouseEnter}
      onClick={info.disabled ? undefined : handleClick}
    >
      {info.label}
    </Box>
  );
}

export default React.memo(FormSelectDropdownItem) as typeof FormSelectDropdownItem;
