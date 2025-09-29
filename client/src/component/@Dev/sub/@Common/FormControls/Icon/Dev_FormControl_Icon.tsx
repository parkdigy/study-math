import React from 'react';
import { Dev_FormControl_IconProps as Props } from './Dev_FormControl_Icon.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

const _icons = [
  lv('AccountCircle', 'AccountCircle'),
  lv('Search', 'Search'),
  lv('RocketLaunch', 'RocketLaunch'),
  lv('Verified', 'Verified'),
  lv('Settings', 'Settings'),
];

export const Dev_FormControl_Icon = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => [..._icons], []);

  const radioItems = useMemo(() => {
    const _items = [..._icons];
    _items.unshift(lv('미지정', undefined));
    return _items;
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Image' title='아이콘 (icon)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='icon' items={selectItems} placeholder='미지정' clearable {...props} />
      ) : (
        <FormRadioGroup name='icon' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_Icon;
