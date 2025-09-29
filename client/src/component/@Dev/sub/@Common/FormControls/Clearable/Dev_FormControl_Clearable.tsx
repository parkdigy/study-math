import React from 'react';
import { Dev_FormControl_ClearableProps as Props } from './Dev_FormControl_Clearable.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Clearable = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='RemoveCircle' title='선택 해제 가능 (clearable)' mt={-5}>
      <FormCheckbox type='switch' name='clearable' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Clearable);
