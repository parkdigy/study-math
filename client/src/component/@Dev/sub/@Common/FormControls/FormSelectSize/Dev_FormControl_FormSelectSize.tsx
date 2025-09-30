import React from 'react';
import { Dev_FormControl_FormSelectSizeProps as Props } from './Dev_FormControl_FormSelectSize.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_FormSelectSize = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['normal', 'small'] as const).map((formSelectSize) => lv(formSelectSize, formSelectSize));
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
    <Dev_PanelItem icon='AspectRatio' title='크기 (size)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='formSelectSize' items={selectItems} clearable placeholder='미지정' {...props} />
      ) : (
        <FormRadioGroup name='formSelectSize' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_FormSelectSize);
