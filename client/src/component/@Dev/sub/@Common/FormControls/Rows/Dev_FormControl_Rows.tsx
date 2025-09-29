import React from 'react';
import { Dev_FormControl_RowsProps as Props } from './Dev_FormControl_Rows.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Rows = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => ([2, 5, 10, 15, 20, 25, 30] as const).map((rows) => lv(rows.toString(), rows)), []);

  const radioItems = useMemo(() => {
    const _items = [...selectItems];
    _items.unshift(lv('미지정', undefined));
    return _items;
  }, [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Article' title='줄 수 (rows)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='rows' items={selectItems} placeholder='미지정' clearable {...props} />
      ) : (
        <FormRadioGroup name='rows' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Rows);
