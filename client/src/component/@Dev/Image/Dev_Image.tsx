import React from 'react';
import { ImgLogo } from '@assets';
import { Dev_Panel } from '../@Common';
import SvgImage from './image.svg';

export const Dev_Image = () => {
  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>이미지 (Img)</TTitleLarge700>

      <Divider />

      <Dev_Panel center>
        <Tooltip place='top-start' content='<Img src="..." />'>
          <Img src={ImgLogo} height={50} />
        </Tooltip>
      </Dev_Panel>

      <Dev_Panel center>
        <Tooltip place='top-start' content='<Img src="..." />'>
          <Svg src={SvgImage} w={50} h={50} c='primary' />
        </Tooltip>
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Image;
