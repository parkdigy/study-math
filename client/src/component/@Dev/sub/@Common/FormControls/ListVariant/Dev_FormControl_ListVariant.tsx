import React from 'react';
import { Dev_FormControl_ListVariantProps as Props } from './Dev_FormControl_ListVariant.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_ListVariant = ({ variant = 'select', value, disabled, onChange }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['default', 'bordered'] as const).map((listVariant) => lv(listVariant, listVariant));
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
        <FormSelect
          name='listVariant'
          items={selectItems}
          value={value}
          onChange={onChange}
          clearable
          disabled={disabled}
          placeholder='미지정'
        />
      ) : (
        <FormRadioGroup
          type='smallButton'
          name='listVariant'
          items={radioItems}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_ListVariant);
