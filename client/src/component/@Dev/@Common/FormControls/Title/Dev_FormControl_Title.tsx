import React from 'react';
import { Dev_FormControl_TitleProps as Props } from './Dev_FormControl_Title.types';
import { Dev_PanelItem } from '../../Layout';
import { FormText } from '@ccomp';

export const Dev_FormControl_Title = ({ ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Title' title='제목 (title)' mt={-5}>
      <FormText name='title' placeholder='제목을 입력해 주세요' {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Title);
