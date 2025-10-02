import React from 'react';
import { Dev_FormControl_ShowIconProps as Props } from './Dev_FormControl_ShowIcon.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_ShowIcon = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Visibility' title='아이콘 노출 (showIcon)' mt={-5}>
      <FormCheckbox type='switch' name='showIcon' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_ShowIcon);
