import React from 'react';
import { Dev_FormControl_MessageProps as Props } from './Dev_FormControl_Message.types';
import { Dev_PanelItem } from '../../Layout';
import { FormTextarea } from '@ccomp';

export const Dev_FormControl_Message = ({ ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Message' title='메시지 (message)' mt={-5}>
      <FormTextarea name='message' placeholder='메시지를 입력해 주세요' {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Message);
