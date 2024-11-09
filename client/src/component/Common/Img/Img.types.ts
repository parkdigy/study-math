import React, { CSSProperties } from 'react';

export interface ImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  m?: CSSProperties['margin'];
  mh?: CSSProperties['marginLeft'];
  mv?: CSSProperties['marginTop'];
  mt?: CSSProperties['marginTop'];
  mb?: CSSProperties['marginBottom'];
  ml?: CSSProperties['marginLeft'];
  mr?: CSSProperties['marginRight'];
  p?: CSSProperties['padding'];
  ph?: CSSProperties['paddingLeft'];
  pv?: CSSProperties['paddingTop'];
  pt?: CSSProperties['paddingTop'];
  pb?: CSSProperties['paddingBottom'];
  pl?: CSSProperties['paddingLeft'];
  pr?: CSSProperties['paddingRight'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  backgroundColor?: CSSProperties['backgroundColor'];
}
