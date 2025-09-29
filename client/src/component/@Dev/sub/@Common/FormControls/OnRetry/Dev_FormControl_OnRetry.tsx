import React from 'react';
import { Dev_FormControl_OnRetryProps as Props } from './Dev_FormControl_OnRetry.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_OnRetry = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Refresh' title='재시도 (onRetry)' mt={-5}>
      <FormCheckbox type='switch' name='onRetry' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_OnRetry);
