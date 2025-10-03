import React from 'react';
import { Dev_FormControl_ButtonSizeProps as Props } from './Dev_FormControl_ButtonSize.types';
import { ButtonSizes, FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_ButtonSize = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return keys(ButtonSizes).map((size) => {
      return lv(`${size}`, size);
    });
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
        <FormSelect name='size' items={selectItems} placeholder='미지정' clearable {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='size' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_ButtonSize);
