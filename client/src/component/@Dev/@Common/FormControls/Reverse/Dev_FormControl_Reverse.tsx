import React from 'react';
import { Dev_FormControl_ReverseProps as Props } from './Dev_FormControl_Reverse.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Reverse = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Contrast' title='반전 (reverse)' mt={-5}>
      <FormCheckbox type='switch' name='reverse' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Reverse);
