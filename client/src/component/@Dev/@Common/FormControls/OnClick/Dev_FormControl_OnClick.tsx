import React from 'react';
import { Dev_FormControl_OnClickProps as Props } from './Dev_FormControl_OnClick.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_OnClick = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Mouse' title='클릭 (onClick)' mt={-5}>
      <FormCheckbox type='switch' name='onClick' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_OnClick);
