import React, { CSSProperties } from 'react';
import { BoxProps as Props } from './Box.types';

export const Box = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      bold,
      // css
      display,
      flex,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      gap,
      position,
      left,
      right,
      top,
      bottom,
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
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      textAlign,
      color,
      backgroundColor,
      background,
      backgroundImage,
      backgroundSize,
      backgroundPosition,
      backgroundRepeat,
      border,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      borderRadius,
      overflow,
      opacity,
      zIndex,
      transform,
      // style
      style,
      // etc
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const finalStyle = useMemo(() => {
      const newFinalStyle: CSSProperties = {
        display: ifUndefined(display, 'block'),
      };
      if (notEmpty(flex)) newFinalStyle.flex = flex;
      if (notEmpty(alignItems)) newFinalStyle.alignItems = alignItems;
      if (notEmpty(justifyContent)) newFinalStyle.justifyContent = justifyContent;
      if (notEmpty(flexDirection)) newFinalStyle.flexDirection = flexDirection;
      if (notEmpty(flexWrap)) newFinalStyle.flexWrap = flexWrap;
      if (notEmpty(gap)) newFinalStyle.gap = gap;
      if (notEmpty(position)) newFinalStyle.position = position;
      if (notEmpty(left)) newFinalStyle.left = left;
      if (notEmpty(right)) newFinalStyle.right = right;
      if (notEmpty(top)) newFinalStyle.top = top;
      if (notEmpty(bottom)) newFinalStyle.bottom = bottom;
      if (notEmpty(m)) newFinalStyle.margin = m;
      if (notEmpty(mt) || notEmpty(mv)) newFinalStyle.marginTop = ifUndefined(mt, mv);
      if (notEmpty(mb) || notEmpty(mv)) newFinalStyle.marginBottom = ifUndefined(mb, mv);
      if (notEmpty(ml) || notEmpty(mh)) newFinalStyle.marginLeft = ifUndefined(ml, mh);
      if (notEmpty(mr) || notEmpty(mh)) newFinalStyle.marginRight = ifUndefined(mr, mh);
      if (notEmpty(p)) newFinalStyle.padding = p;
      if (notEmpty(pt) || notEmpty(pv)) newFinalStyle.paddingTop = ifUndefined(pt, pv);
      if (notEmpty(pb) || notEmpty(pv)) newFinalStyle.paddingBottom = ifUndefined(pb, pv);
      if (notEmpty(pl) || notEmpty(ph)) newFinalStyle.paddingLeft = ifUndefined(pl, ph);
      if (notEmpty(pr) || notEmpty(ph)) newFinalStyle.paddingRight = ifUndefined(pr, ph);
      if (notEmpty(width)) newFinalStyle.width = width;
      if (notEmpty(height)) newFinalStyle.height = height;
      if (notEmpty(minWidth)) newFinalStyle.minWidth = minWidth;
      if (notEmpty(maxWidth)) newFinalStyle.maxWidth = maxWidth;
      if (notEmpty(minHeight)) newFinalStyle.minHeight = minHeight;
      if (notEmpty(maxHeight)) newFinalStyle.maxHeight = maxHeight;
      if (notEmpty(fontFamily)) newFinalStyle.fontFamily = fontFamily;
      if (notEmpty(fontSize)) newFinalStyle.fontSize = fontSize;
      if (notEmpty(fontWeight) || bold) newFinalStyle.fontWeight = ifUndefined(fontWeight, bold ? 'bold' : undefined);
      if (notEmpty(lineHeight)) newFinalStyle.lineHeight = lineHeight;
      if (notEmpty(textAlign)) newFinalStyle.textAlign = textAlign;
      if (notEmpty(color)) newFinalStyle.color = color;
      if (notEmpty(backgroundColor)) newFinalStyle.backgroundColor = backgroundColor;
      if (notEmpty(background)) newFinalStyle.background = background;
      if (notEmpty(backgroundImage)) newFinalStyle.backgroundImage = backgroundImage;
      if (notEmpty(backgroundSize)) newFinalStyle.backgroundSize = backgroundSize;
      if (notEmpty(backgroundPosition)) newFinalStyle.backgroundPosition = backgroundPosition;
      if (notEmpty(backgroundRepeat)) newFinalStyle.backgroundRepeat = backgroundRepeat;
      if (notEmpty(border)) newFinalStyle.border = border;
      if (notEmpty(borderTop)) newFinalStyle.borderTop = borderTop;
      if (notEmpty(borderBottom)) newFinalStyle.borderBottom = borderBottom;
      if (notEmpty(borderLeft)) newFinalStyle.borderLeft = borderLeft;
      if (notEmpty(borderRight)) newFinalStyle.borderRight = borderRight;
      if (notEmpty(borderRadius)) newFinalStyle.borderRadius = borderRadius;
      if (notEmpty(overflow)) newFinalStyle.overflow = overflow;
      if (notEmpty(opacity)) newFinalStyle.opacity = opacity;
      if (notEmpty(zIndex)) newFinalStyle.zIndex = zIndex;
      if (notEmpty(transform)) newFinalStyle.transform = transform;

      return { ...newFinalStyle, ...style };
    }, [
      alignItems,
      background,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      backgroundSize,
      bold,
      border,
      borderBottom,
      borderLeft,
      borderRadius,
      borderRight,
      borderTop,
      bottom,
      color,
      display,
      flex,
      flexDirection,
      flexWrap,
      fontFamily,
      fontSize,
      fontWeight,
      gap,
      height,
      justifyContent,
      left,
      lineHeight,
      m,
      maxHeight,
      maxWidth,
      mb,
      mh,
      minHeight,
      minWidth,
      ml,
      mr,
      mt,
      mv,
      opacity,
      overflow,
      p,
      pb,
      ph,
      pl,
      position,
      pr,
      pt,
      pv,
      right,
      style,
      textAlign,
      top,
      transform,
      width,
      zIndex,
    ]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return <div ref={ref} style={finalStyle} {...props} />;
  }
);

export default Box;
