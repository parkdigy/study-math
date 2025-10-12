import React from 'react';
import { ImgHtmlProps, ImgProps as Props } from './Img.types';
import { CustomComponent } from '../CustomComponent';
import './Img.scss';

export const Img = React.forwardRef<HTMLImageElement, Props>(({ className, rotate, ...props }, ref) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <CustomComponent<ImgHtmlProps>
      ref={ref}
      component='img'
      className={classnames(className, 'Img')}
      transform={rotate ? `rotate(${rotate}deg)` : undefined}
      {...props}
    />
  );
});

export default Img;
