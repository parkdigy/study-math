import React from 'react';
import { Dev_FormControl_HideTitleProps as Props } from './Dev_FormControl_HideTitle.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_HideTitle = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='VisibilityOff' title='제목 숨김 (hideTitle)' mt={-5}>
      <FormCheckbox type='switch' name='hideTitle' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_HideTitle);
