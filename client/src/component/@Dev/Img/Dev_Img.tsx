import React from 'react';
import { ImgLogo } from '@assets';
import { Dev_Panel } from '../@Common';

export const Dev_Img = () => {
  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>이미지 (Img)</TTitleLarge700>

      <Divider />

      <Dev_Panel>
        <Tooltip place='top-start' content='<Img src="..." />'>
          <Img src={ImgLogo} height={50} />
        </Tooltip>
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Img;
