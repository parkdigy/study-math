import React from 'react';
import { Dev_FormControl_IconSpacingProps as Props } from './Dev_FormControl_IconSpacing.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_IconSpacing = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => [0, 5, 10, 20, 30].map((v) => lv(`${v}`, v)), []);

  const radioItems = useMemo(() => {
    const _items = [...selectItems];
    _items.unshift(lv('미지정', undefined));
    return _items;
  }, [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Expand' iconProps={{ rotate: 90 }} title='아이콘 간격 (iconSpacing)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='iconSpacing' items={selectItems} placeholder='미지정' clearable {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='iconSpacing' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_IconSpacing);
