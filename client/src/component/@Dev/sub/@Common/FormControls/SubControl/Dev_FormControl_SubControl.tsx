import React from 'react';
import { Dev_FormControl_SubControlProps as Props } from './Dev_FormControl_SubControl.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_SubControl = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Stop' title='하위 컨트롤 (subControl)' mt={-5}>
      <FormCheckbox type='switch' name='subControl' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_SubControl);
