import React, { CSSProperties } from 'react';
import { SvgProps as Props } from './Svg.types';
import { ReactSVG } from 'react-svg';
import { AllColors } from '@theme';
import './Svg.scss';

export const Svg = ({
  className,
  w: initW,
  width: initWidth,
  h: initH,
  height: initHeight,
  c: initC,
  color: initColor,
  style: initStyle,
  afterInjection,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const width = ifUndefined(initWidth, initW);
  const height = ifUndefined(initHeight, initH);

  const finalInitColor = ifUndefined(initColor, initC);
  let color: CSSProperties['color'];
  if (finalInitColor && contains(AllColors, finalInitColor)) {
    color = theme.css.vars.colors[finalInitColor];
  }

  const style: CSSProperties = {
    ...initStyle,
  };
  if (width !== undefined) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height !== undefined) style.height = typeof height === 'number' ? `${height}px` : height;
  if (color !== undefined) style.color = color;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ReactSVG
      className={classnames(className, 'Svg')}
      style={style}
      httpRequestWithCredentials={true}
      afterInjection={(svg) => {
        if (width !== undefined) {
          svg.setAttribute('width', typeof width === 'number' ? `${width}px` : width);
        }
        if (height !== undefined) {
          svg.setAttribute('height', typeof height === 'number' ? `${height}px` : height);
        }
        afterInjection?.(svg);
      }}
      {...props}
    />
  );
};

export default Svg;
