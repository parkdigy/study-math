import React from 'react';
import { Dev_FormControl_ButtonVariantProps as Props } from './Dev_FormControl_ButtonVariant.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_ButtonVariant = ({ variant = 'select', value, disabled, onChange }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['contained', 'outlined', 'text'] as const).map((buttonVariant) => lv(buttonVariant, buttonVariant));
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
          name='buttonVariant'
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
          name='buttonVariant'
          items={radioItems}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_ButtonVariant);
