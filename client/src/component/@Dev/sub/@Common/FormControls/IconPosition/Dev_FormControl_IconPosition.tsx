import React from 'react';
import { Dev_FormControl_IconPositionProps as Props } from './Dev_FormControl_IconPosition.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_IconPosition = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => [lv('start (왼쪽)', 'start' as const), lv('end (오른쪽)', 'end' as const)], []);

  const radioItems = useMemo(() => {
    const _items = [
      lv(
        <Stack row center spacing={3}>
          <T>start</T>
          <T opacity={0.5}>(왼쪽)</T>
        </Stack>,
        'start' as const
      ),
      lv(
        <Stack row center spacing={3}>
          <T>end</T>
          <T opacity={0.5}>(오른쪽)</T>
        </Stack>,
        'end' as const
      ),
    ];
    _items.unshift(lv('미지정', undefined));
    return _items;
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Start' title='아이콘 위치 (iconPosition)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='iconPosition' items={selectItems} placeholder='미지정' clearable {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='iconPosition' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_IconPosition);
