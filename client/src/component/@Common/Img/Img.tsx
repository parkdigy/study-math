import React from 'react';
import { ImgHtmlProps, ImgProps as Props } from './Img.types';
import { CustomComponent } from '../CustomComponent';

export const Img = React.forwardRef<HTMLImageElement, Props>((props, ref) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <CustomComponent<ImgHtmlProps> ref={ref} component='img' {...props} />;
});

export default Img;
