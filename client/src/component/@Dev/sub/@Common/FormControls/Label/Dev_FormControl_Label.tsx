import React from 'react';
import { Dev_FormControl_LabelProps as Props } from './Dev_FormControl_Label.types';
import { Dev_PanelItem } from '../../Layout';
import { FormText } from '@ccomp';

export const Dev_FormControl_Label = ({ ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Label' title='레이블 (label)' mt={-5}>
      <FormText name='label' placeholder='입력해 주세요' {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Label);
