import React from 'react';
import { Dev_FormControl_RequiredProps as Props } from './Dev_FormControl_Required.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Required = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='BorderColor' title='필수 (required)' mt={-5}>
      <FormCheckbox type='switch' name='required' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Required);
