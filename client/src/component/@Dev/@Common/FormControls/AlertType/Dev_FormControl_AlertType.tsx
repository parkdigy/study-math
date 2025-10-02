import React from 'react';
import { Dev_FormControl_AlertTypeProps as Props } from './Dev_FormControl_AlertType.types';
import { AlertType, FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_AlertType = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return AlertType.map((alertType) => lv(alertType, alertType));
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
        <FormSelect name='alertType' items={selectItems} clearable placeholder='미지정' {...props} />
      ) : (
        <FormRadioGroup name='alertType' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_AlertType);
