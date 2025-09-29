import React, { CSSProperties } from 'react';
import { LogoProps as Props } from './Logo.types';
import { ImgLogo } from '@asset_images';
import './Logo.scss';

const _baseSize = {
  width: 520,
  height: 100,
};

export const Logo = ({ size = 'md', width: initWidth, height: initHeight, onClick }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  let width: CSSProperties['width'] = _baseSize.width;
  let height: CSSProperties['height'] = _baseSize.height;

  if (initWidth !== undefined || initHeight !== undefined) {
    width = initWidth;
    height = initHeight;
  } else if (size !== undefined) {
    const defaultSize = theme.sizes[size].fontSize * 1.5;
    width = (defaultSize / _baseSize.height) * _baseSize.width;
    height = defaultSize;
  }

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className={classnames('Logo', onClick && 'Logo-clickable')} onClick={onClick}>
      <Img src={ImgLogo} width={width} height={height} />
    </div>
  );
};

export default Logo;
