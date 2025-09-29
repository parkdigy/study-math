import React from 'react';
import { Dev_FormControl_HelperTextProps as Props } from './Dev_FormControl_HelperText.types';
import { Dev_PanelItem } from '../../Layout';
import { FormText } from '@ccomp';

export const Dev_FormControl_HelperText = ({ ...props }: Props) => {
  return (
    <Dev_PanelItem icon='InfoOutline' title='헬퍼 텍스트 (helperText)' mt={-5}>
      <FormText name='helperText' placeholder='입력해 주세요' {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_HelperText);
