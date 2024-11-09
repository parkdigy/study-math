import React from 'react';
import { ImgProps as Props } from './Img.types';

export const Img = ({
  m,
  mh,
  mv,
  mt,
  mb,
  ml,
  mr,
  p,
  ph,
  pv,
  pt,
  pb,
  pl,
  pr,
  width,
  height,
  backgroundColor,
  style,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const finalStyle = useMemo(() => {
    return {
      margin: m,
      marginTop: ifUndefined(mt, mv),
      marginBottom: ifUndefined(mb, mv),
      marginLeft: ifUndefined(ml, mh),
      marginRight: ifUndefined(mr, mh),
      padding: p,
      paddingTop: ifUndefined(pt, pv),
      paddingBottom: ifUndefined(pb, pv),
      paddingLeft: ifUndefined(pl, ph),
      paddingRight: ifUndefined(pr, ph),
      width,
      height,
      backgroundColor,
      ...style,
    };
  }, [backgroundColor, height, m, mb, mh, ml, mr, mt, mv, p, pb, ph, pl, pr, pt, pv, style, width]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <img style={finalStyle} {...props} />;
};

export default Img;
