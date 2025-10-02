import React from 'react';
import { Dev_FormControl_LoadingProps as Props } from './Dev_FormControl_Loading.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Loading = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Refresh' title='로딩 (loading)' mt={-5}>
      <FormCheckbox type='switch' name='loading' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Loading);
