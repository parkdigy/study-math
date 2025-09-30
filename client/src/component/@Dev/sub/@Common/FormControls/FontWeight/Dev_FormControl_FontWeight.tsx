import React from 'react';
import { Dev_FormControl_FontWeightProps as Props } from './Dev_FormControl_FontWeight.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_FontWeight = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(
    () =>
      (['bold', 100, 200, 300, 400, 500, 600, 700, 800, 900] as const).map((fontWeight) =>
        lv(fontWeight.toString(), fontWeight)
      ),
    []
  );

  const radioItems = useMemo(() => {
    const _items = [...selectItems];
    _items.unshift(lv('미지정', undefined));
    return _items;
  }, [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='LineWeight' title='굵기 (fontWeight)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='fontWeight' items={selectItems} placeholder='미지정' clearable {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='fontWeight' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_FontWeight);
