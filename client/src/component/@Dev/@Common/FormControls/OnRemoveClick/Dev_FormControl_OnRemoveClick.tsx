import React from 'react';
import { Dev_FormControl_OnRemoveClickProps as Props } from './Dev_FormControl_OnRemoveClick.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_OnRemoveClick = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Mouse' title='삭제 클릭 (onRemoveClick)' mt={-5}>
      <FormCheckbox type='switch' name='onRemoveClick' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_OnRemoveClick);
