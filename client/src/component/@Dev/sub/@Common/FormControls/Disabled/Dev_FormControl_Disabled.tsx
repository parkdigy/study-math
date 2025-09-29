import React from 'react';
import { Dev_FormControl_DisabledProps as Props } from './Dev_FormControl_Disabled.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Disabled = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='RemoveCircle' title='비활성 (disabled)' mt={-5}>
      <FormCheckbox type='switch' name='disabled' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Disabled);
