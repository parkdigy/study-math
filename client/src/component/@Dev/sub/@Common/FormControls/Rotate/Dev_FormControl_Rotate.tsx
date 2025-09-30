import React from 'react';
import { Dev_FormControl_RotateProps as Props } from './Dev_FormControl_Rotate.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Rotate = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return ([90, 180, 270] as const).map((rotate) => lv(`${rotate}도`, rotate));
  }, []);

  const radioItems = useMemo(() => {
    const _items = [...selectItems];
    _items.unshift(lv('미지정', undefined));
    return _items;
  }, [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Refresh' title='회전 (rotate)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='rotate' items={selectItems} clearable placeholder='미지정' {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='rotate' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Rotate);
