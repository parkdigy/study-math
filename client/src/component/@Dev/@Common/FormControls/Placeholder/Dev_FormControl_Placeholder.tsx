import React from 'react';
import { Dev_FormControl_PlaceholderProps as Props } from './Dev_FormControl_Placeholder.types';
import { Dev_PanelItem } from '../../Layout';
import { FormText } from '@ccomp';

export const Dev_FormControl_Placeholder = ({ ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Abc' title='Placeholder (placeholder)' mt={-5}>
      <FormText name='placeholder' placeholder='Placeholder를 입력해 주세요' {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Placeholder);
