import React from 'react';
import { Dev_FormControl_IconButtonVariantProps as Props } from './Dev_FormControl_IconButtonVariant.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_IconButtonVariant = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['default', 'rounded'] as const).map((iconButtonVariant) => lv(iconButtonVariant, iconButtonVariant));
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
    <Dev_PanelItem icon='Category' title='스타일 (variant)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='iconButtonVariant' items={selectItems} clearable placeholder='미지정' {...props} />
      ) : (
        <FormRadioGroup name='iconButtonVariant' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_IconButtonVariant);
