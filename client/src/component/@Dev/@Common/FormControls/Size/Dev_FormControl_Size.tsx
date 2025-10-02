import React from 'react';
import { Dev_FormControl_SizeProps as Props } from './Dev_FormControl_Size.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { FriendlyNameSizes, getSizeOfFriendlyName } from '@theme';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Size = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return FriendlyNameSizes.map((size) => {
      return lv(`${size} (${getSizeOfFriendlyName(size)})`, size);
    });
  }, []);

  const radioItems = useMemo(() => {
    const _items = FriendlyNameSizes.map((size) => {
      return lv(
        <Stack row center spacing={3}>
          <T>{size}</T>
          <T opacity={0.5}>({getSizeOfFriendlyName(size)})</T>
        </Stack>,
        size
      );
    });
    _items.unshift(lv('미지정', undefined));
    return _items;
  }, []);

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

export default React.memo(Dev_FormControl_Size);
