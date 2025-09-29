import React, { CSSProperties } from 'react';
import { CustomComponentProps as Props } from './CustomComponent.types';

export const CustomComponent = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T>(
    {
      component: Component,
      // display
      display,
      // padding
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      // margin
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      // border
      border,
      borderWidth,
      borderStyle,
      borderColor,
      borderLeft,
      borderLeftWidth,
      borderLeftStyle,
      borderLeftColor,
      borderRight,
      borderRightWidth,
      borderRightStyle,
      borderRightColor,
      borderTop,
      borderTopWidth,
      borderTopStyle,
      borderTopColor,
      borderBottom,
      borderBottomWidth,
      borderBottomStyle,
      borderBottomColor,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      // flex
      flex,
      gap,
      flexDirection,
      flexBasis,
      flexFlow,
      flexShrink,
      flexGrow,
      flexWrap,
      alignItems,
      alignSelf,
      alignContent,
      alignTracks,
      justifyItems,
      justifySelf,
      justifyContent,
      justifyTracks,
      // font
      font,
      fontFamily,
      fontSize,
      fontWeight,
      fontStyle,
      letterSpacing,
      lineHeight,
      textAlign,
      textDecoration,
      whiteSpace,
      textTransform,
      wordWrap,
      wordBreak,
      wordSpacing,
      color,
      // background
      background,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundSize,
      backgroundRepeat,
      // position
      position,
      top,
      left,
      right,
      bottom,
      zIndex,
      // size
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      // transform
      transform,
      transformOrigin,
      transformStyle,
      transformBox,
      // transition
      transition,
      transitionBehavior,
      transitionDelay,
      transitionDuration,
      transitionProperty,
      transitionTimingFunction,
      // overflow
      overflow,
      overflowX,
      overflowY,
      textOverflow,
      // outline
      outline,
      outlineWidth,
      outlineStyle,
      outlineColor,
      outlineOffset,
      // others
      boxShadow,
      cursor,
      opacity,
      visibility,
      pointerEvents,
      userSelect,
      verticalAlign,
      filter,
      // custom
      p,
      pl,
      pr,
      pt,
      pb,
      ph,
      pv,
      m,
      ml,
      mr,
      mt,
      mb,
      mh,
      mv,
      bold,
      fullWidth,
      fullHeight,
      cssVars,
      // component props
      ...componentProps
    }: Props<T>,
    ref: React.ForwardedRef<any>
  ) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const style: CSSProperties = { ...cssVars };
    // display
    if (display !== undefined) style.display = display;
    // padding
    if (padding !== undefined) style.padding = padding;
    else if (p !== undefined) style.padding = p;
    if (paddingLeft !== undefined) style.paddingLeft = paddingLeft;
    else if (pl !== undefined) style.paddingLeft = pl;
    else if (ph !== undefined) style.paddingLeft = ph;
    if (paddingRight !== undefined) style.paddingRight = paddingRight;
    else if (pr !== undefined) style.paddingRight = pr;
    else if (ph !== undefined) style.paddingRight = ph;
    if (paddingTop !== undefined) style.paddingTop = paddingTop;
    else if (pt !== undefined) style.paddingTop = pt;
    else if (pv !== undefined) style.paddingTop = pv;
    if (paddingBottom !== undefined) style.paddingBottom = paddingBottom;
    else if (pb !== undefined) style.paddingBottom = pb;
    else if (pv !== undefined) style.paddingBottom = pv;
    // margin
    if (margin !== undefined) style.margin = margin;
    else if (m !== undefined) style.margin = m;
    if (marginLeft !== undefined) style.marginLeft = marginLeft;
    else if (ml !== undefined) style.marginLeft = ml;
    else if (mh !== undefined) style.marginLeft = mh;
    if (marginRight !== undefined) style.marginRight = marginRight;
    else if (mr !== undefined) style.marginRight = mr;
    else if (mh !== undefined) style.marginRight = mh;
    if (marginTop !== undefined) style.marginTop = marginTop;
    else if (mt !== undefined) style.marginTop = mt;
    else if (mv !== undefined) style.marginTop = mv;
    if (marginBottom !== undefined) style.marginBottom = marginBottom;
    else if (mb !== undefined) style.marginBottom = mb;
    else if (mv !== undefined) style.marginBottom = mv;
    // border
    if (border !== undefined) style.border = border;
    if (borderWidth !== undefined) style.borderWidth = borderWidth;
    if (borderStyle !== undefined) style.borderStyle = borderStyle;
    if (borderColor !== undefined) style.borderColor = borderColor;
    if (borderLeft !== undefined) style.borderLeft = borderLeft;
    if (borderLeftWidth !== undefined) style.borderLeftWidth = borderLeftWidth;
    if (borderLeftStyle !== undefined) style.borderLeftStyle = borderLeftStyle;
    if (borderLeftColor !== undefined) style.borderLeftColor = borderLeftColor;
    if (borderRight !== undefined) style.borderRight = borderRight;
    if (borderRightWidth !== undefined) style.borderRightWidth = borderRightWidth;
    if (borderRightStyle !== undefined) style.borderRightStyle = borderRightStyle;
    if (borderRightColor !== undefined) style.borderRightColor = borderRightColor;
    if (borderTop !== undefined) style.borderTop = borderTop;
    if (borderTopWidth !== undefined) style.borderTopWidth = borderTopWidth;
    if (borderTopStyle !== undefined) style.borderTopStyle = borderTopStyle;
    if (borderTopColor !== undefined) style.borderTopColor = borderTopColor;
    if (borderBottom !== undefined) style.borderBottom = borderBottom;
    if (borderBottomWidth !== undefined) style.borderBottomWidth = borderBottomWidth;
    if (borderBottomStyle !== undefined) style.borderBottomStyle = borderBottomStyle;
    if (borderBottomColor !== undefined) style.borderBottomColor = borderBottomColor;
    if (borderRadius !== undefined) style.borderRadius = borderRadius;
    if (borderTopLeftRadius !== undefined) style.borderTopLeftRadius = borderTopLeftRadius;
    if (borderTopRightRadius !== undefined) style.borderTopRightRadius = borderTopRightRadius;
    if (borderBottomLeftRadius !== undefined) style.borderBottomLeftRadius = borderBottomLeftRadius;
    if (borderBottomRightRadius !== undefined) style.borderBottomRightRadius = borderBottomRightRadius;
    // flex
    if (flex !== undefined) style.flex = flex;
    if (gap !== undefined) style.gap = gap;
    if (flexDirection !== undefined) style.flexDirection = flexDirection;
    if (flexBasis !== undefined) style.flexBasis = flexBasis;
    if (flexFlow !== undefined) style.flexFlow = flexFlow;
    if (flexShrink !== undefined) style.flexShrink = flexShrink;
    if (flexGrow !== undefined) style.flexGrow = flexGrow;
    if (flexWrap !== undefined) style.flexWrap = flexWrap;
    if (alignItems !== undefined) style.alignItems = alignItems;
    if (alignSelf !== undefined) style.alignSelf = alignSelf;
    if (alignContent !== undefined) style.alignContent = alignContent;
    if (alignTracks !== undefined) style.alignTracks = alignTracks;
    if (justifyItems !== undefined) style.justifyItems = justifyItems;
    if (justifySelf !== undefined) style.justifySelf = justifySelf;
    if (justifyContent !== undefined) style.justifyContent = justifyContent;
    if (justifyTracks !== undefined) style.justifyTracks = justifyTracks;
    // font
    if (font !== undefined) style.font = font;
    if (fontFamily !== undefined) style.fontFamily = fontFamily;
    if (fontSize !== undefined) style.fontSize = fontSize;
    if (fontWeight !== undefined) style.fontWeight = fontWeight;
    else if (bold) style.fontWeight = 'bold';
    if (fontStyle !== undefined) style.fontStyle = fontStyle;
    if (letterSpacing !== undefined) style.letterSpacing = letterSpacing;
    if (lineHeight !== undefined) style.lineHeight = lineHeight;
    if (textAlign !== undefined) style.textAlign = textAlign;
    if (textDecoration !== undefined) style.textDecoration = textDecoration;
    if (textTransform !== undefined) style.textTransform = textTransform;
    if (wordWrap !== undefined) style.wordWrap = wordWrap;
    if (wordBreak !== undefined) style.wordBreak = wordBreak;
    if (wordSpacing !== undefined) style.wordSpacing = wordSpacing;
    if (color !== undefined) style.color = color;
    // background
    if (background !== undefined) style.background = background;
    if (backgroundColor !== undefined) style.backgroundColor = backgroundColor;
    if (backgroundImage !== undefined) style.backgroundImage = backgroundImage;
    if (backgroundPosition !== undefined) style.backgroundPosition = backgroundPosition;
    if (backgroundSize !== undefined) style.backgroundSize = backgroundSize;
    if (backgroundRepeat !== undefined) style.backgroundRepeat = backgroundRepeat;
    // position
    if (position !== undefined) style.position = position;
    if (top !== undefined) style.top = top;
    if (left !== undefined) style.left = left;
    if (right !== undefined) style.right = right;
    if (bottom !== undefined) style.bottom = bottom;
    if (zIndex !== undefined) style.zIndex = zIndex;
    // size
    if (width !== undefined) style.width = width;
    else if (fullWidth) style.width = '100%';
    if (maxWidth !== undefined) style.maxWidth = maxWidth;
    if (minWidth !== undefined) style.minWidth = minWidth;
    if (height !== undefined) style.height = height;
    else if (fullHeight) style.height = '100%';
    if (maxHeight !== undefined) style.maxHeight = maxHeight;
    if (minHeight !== undefined) style.minHeight = minHeight;
    // transform
    if (transform !== undefined) style.transform = transform;
    if (transformOrigin !== undefined) style.transformOrigin = transformOrigin;
    if (transformStyle !== undefined) style.transformStyle = transformStyle;
    if (transformBox !== undefined) style.transformBox = transformBox;
    // transition
    if (transition !== undefined) style.transition = transition;
    if (transitionBehavior !== undefined) style.transitionBehavior = transitionBehavior;
    if (transitionDelay !== undefined) style.transitionDelay = transitionDelay;
    if (transitionDuration !== undefined) style.transitionDuration = transitionDuration;
    if (transitionProperty !== undefined) style.transitionProperty = transitionProperty;
    if (transitionTimingFunction !== undefined) style.transitionTimingFunction = transitionTimingFunction;
    // outline
    if (outline !== undefined) style.outline = outline;
    if (outlineWidth !== undefined) style.outlineWidth = outlineWidth;
    if (outlineStyle !== undefined) style.outlineStyle = outlineStyle;
    if (outlineColor !== undefined) style.outlineColor = outlineColor;
    if (outlineOffset !== undefined) style.outlineOffset = outlineOffset;
    // others
    if (boxShadow !== undefined) style.boxShadow = boxShadow;
    if (overflow !== undefined) style.overflow = overflow;
    if (overflowX !== undefined) style.overflowX = overflowX;
    if (overflowY !== undefined) style.overflowY = overflowY;
    if (cursor !== undefined) style.cursor = cursor;
    if (opacity !== undefined) style.opacity = opacity;
    if (visibility !== undefined) style.visibility = visibility;
    if (whiteSpace !== undefined) style.whiteSpace = whiteSpace;
    if (textOverflow !== undefined) style.textOverflow = textOverflow;
    if (pointerEvents !== undefined) style.pointerEvents = pointerEvents;
    if (userSelect !== undefined) style.userSelect = userSelect;
    if (verticalAlign !== undefined) style.verticalAlign = verticalAlign;
    if (filter !== undefined) style.filter = filter;

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return <Component ref={ref} style={empty(style) ? undefined : style} {...componentProps} />;
  })
);

export default CustomComponent;
