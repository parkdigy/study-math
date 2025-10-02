import React from 'react';
import { Dev_FormControl_FormCheckboxTypeProps as Props } from './Dev_FormControl_FormCheckboxType.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_FormCheckboxType = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['checkbox', 'switch'] as const).map((formCheckboxType) => lv(formCheckboxType, formCheckboxType));
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
    <Dev_PanelItem icon='Category' title='구분 (type)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='formCheckboxType' items={selectItems} clearable placeholder='미지정' {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='formCheckboxType' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_FormCheckboxType);
