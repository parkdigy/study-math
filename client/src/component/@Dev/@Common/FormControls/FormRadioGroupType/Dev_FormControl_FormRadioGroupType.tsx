import React from 'react';
import { Dev_FormControl_FormRadioGroupTypeProps as Props } from './Dev_FormControl_FormRadioGroupType.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_FormRadioGroupType = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['radio', 'button', 'smallButton'] as const).map((formRadioGroupType) =>
      lv(formRadioGroupType, formRadioGroupType)
    );
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
    <Dev_PanelItem icon='Category' title='유형 (type)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='formRadioGroupType' items={selectItems} clearable placeholder='미지정' {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='formRadioGroupType' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_FormRadioGroupType);
