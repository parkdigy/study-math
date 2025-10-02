import React from 'react';
import { Dev_FormControl_UrlProps as Props } from './Dev_FormControl_Url.types';
import { Dev_PanelItem } from '../../Layout';
import { FormUrl } from '@ccomp';

export const Dev_FormControl_Url = ({ ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Link' title='URL (url)' mt={-5}>
      <FormUrl name='url' placeholder='URL을 입력해 주세요' helperText={'내부 URL은 / 로 시작'} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Url);
