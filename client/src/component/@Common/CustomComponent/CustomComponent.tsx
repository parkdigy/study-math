import React, { CSSProperties } from 'react';
import { CustomComponentProps as Props } from './CustomComponent.types';
import { AllColors, AllSizes } from '@theme';

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
      // padding - custom
      p,
      pl,
      pr,
      pt,
      pb,
      ph,
      pv,
      // margin
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      // margin - custom
      m,
      ml,
      mr,
      mt,
      mb,
      mh,
      mv,
      // border
      border,
      borderWidth,
      borderStyle,
      borderColor: initBorderColor,
      borderLeft,
      borderLeftWidth,
      borderLeftStyle,
      borderLeftColor: initBorderLeftColor,
      borderRight,
      borderRightWidth,
      borderRightStyle,
      borderRightColor: initBorderRightColor,
      borderTop,
      borderTopWidth,
      borderTopStyle,
      borderTopColor: initBorderTopColor,
      borderBottom,
      borderBottomWidth,
      borderBottomStyle,
      borderBottomColor: initBorderBottomColor,
      borderRadius: initBorderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      // border - custom
      radius: initRadius,
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
      fontSize: initFontSize,
      lineHeight: initLineHeight,
      fontWeight: initFontWeight,
      fontStyle,
      letterSpacing,
      textAlign,
      textDecoration,
      whiteSpace,
      textTransform,
      wordWrap,
      wordBreak,
      wordSpacing,
      color: initColor,
      // font - custom
      fs: initFs,
      lh: initLh,
      fw: initFw,
      c: initC,
      s: initS,
      size: initSize,
      bold,
      // background
      background: initBackground,
      backgroundColor: initBackgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundSize,
      backgroundRepeat,
      // background - custom
      bg: initBg,
      bgColor: initBgColor,
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
      // size - custom
      w,
      h,
      fullWidth,
      fullHeight,
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
      outlineColor: initOutlineColor,
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
      cssVars,
      // component props
      ...componentProps
    }: Props<T>,
    ref: React.ForwardedRef<any>
  ) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

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
    const borderColor =
      initBorderColor !== undefined && !initBorderColor.startsWith('#') && contains(AllColors, initBorderColor)
        ? theme.colors[initBorderColor]
        : initBorderColor;
    if (borderColor !== undefined) style.borderColor = borderColor;

    const borderLeftColor =
      initBorderLeftColor !== undefined &&
      !initBorderLeftColor.startsWith('#') &&
      contains(AllColors, initBorderLeftColor)
        ? theme.colors[initBorderLeftColor]
        : initBorderLeftColor;
    if (borderLeftColor !== undefined) style.borderLeftColor = borderLeftColor;

    const borderRightColor =
      initBorderRightColor !== undefined &&
      !initBorderRightColor.startsWith('#') &&
      contains(AllColors, initBorderRightColor)
        ? theme.colors[initBorderRightColor]
        : initBorderRightColor;
    if (borderRightColor !== undefined) style.borderRightColor = borderRightColor;

    const borderTopColor =
      initBorderTopColor !== undefined && !initBorderTopColor.startsWith('#') && contains(AllColors, initBorderTopColor)
        ? theme.colors[initBorderTopColor]
        : initBorderTopColor;
    if (borderTopColor !== undefined) style.borderTopColor = borderTopColor;

    const borderBottomColor =
      initBorderBottomColor !== undefined &&
      !initBorderBottomColor.startsWith('#') &&
      contains(AllColors, initBorderBottomColor)
        ? theme.colors[initBorderBottomColor]
        : initBorderBottomColor;
    if (borderBottomColor !== undefined) style.borderBottomColor = borderBottomColor;

    if (borderStyle !== undefined) style.borderStyle = borderStyle;
    else if (border === undefined && borderColor !== undefined) style.borderStyle = 'solid';

    if (borderLeftStyle !== undefined) style.borderLeftStyle = borderLeftStyle;
    else if (borderLeft === undefined && borderLeftColor !== undefined) style.borderLeftStyle = 'solid';

    if (borderRightStyle !== undefined) style.borderRightStyle = borderRightStyle;
    else if (borderRight === undefined && borderRightColor !== undefined) style.borderRightStyle = 'solid';

    if (borderTopStyle !== undefined) style.borderTopStyle = borderTopStyle;
    else if (borderTop === undefined && borderTopColor !== undefined) style.borderTopStyle = 'solid';

    if (borderBottomStyle !== undefined) style.borderBottomStyle = borderBottomStyle;
    else if (borderBottom === undefined && borderBottomColor !== undefined) style.borderBottomStyle = 'solid';

    if (borderWidth !== undefined) style.borderWidth = borderWidth;
    else if (border === undefined && borderColor !== undefined) style.borderWidth = 1;

    if (borderLeftWidth !== undefined) style.borderLeftWidth = borderLeftWidth;
    else if (borderLeft === undefined && borderLeftColor !== undefined) style.borderLeftWidth = 1;

    if (borderRightWidth !== undefined) style.borderRightWidth = borderRightWidth;
    else if (borderRight === undefined && borderRightColor !== undefined) style.borderRightWidth = 1;

    if (borderTopWidth !== undefined) style.borderTopWidth = borderTopWidth;
    else if (borderTop === undefined && borderTopColor !== undefined) style.borderTopWidth = 1;

    if (borderBottomWidth !== undefined) style.borderBottomWidth = borderBottomWidth;
    else if (borderBottom === undefined && borderBottomColor !== undefined) style.borderBottomWidth = 1;

    if (border !== undefined) style.border = border;
    if (borderLeft !== undefined) style.borderLeft = borderLeft;
    if (borderRight !== undefined) style.borderRight = borderRight;
    if (borderTop !== undefined) style.borderTop = borderTop;
    if (borderBottom !== undefined) style.borderBottom = borderBottom;

    if (initBorderRadius !== undefined) style.borderRadius = initBorderRadius;
    else if (initRadius !== undefined) style.borderRadius = initRadius;

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
    let fontSize = ifUndefined(initFontSize, initFs);
    if (fontSize !== undefined && typeof fontSize === 'string' && contains(AllSizes, fontSize)) {
      fontSize = theme.sizes[fontSize].fontSize;
    }
    if (fontSize !== undefined) style.fontSize = fontSize;

    let lineHeight = ifUndefined(initLineHeight, initLh);
    if (lineHeight !== undefined && typeof lineHeight === 'string' && contains(AllSizes, lineHeight)) {
      lineHeight = theme.sizes[lineHeight].lineHeight;
    }
    if (lineHeight !== undefined) style.lineHeight = lineHeight;

    const fontWeight = ifUndefined(initFontWeight, initFw);
    if (fontWeight !== undefined) style.fontWeight = fontWeight;
    else if (bold) style.fontWeight = 'bold';

    let color = ifUndefined(initColor, initC);
    if (color !== undefined && !color.startsWith('#') && contains(AllColors, color)) {
      color = theme.colors[color];
    }
    if (color !== undefined) style.color = color;

    const size = ifUndefined(initSize, initS);
    if (size !== undefined) {
      if (style.fontSize === undefined) style.fontSize = theme.sizes[size].fontSize;
      if (style.lineHeight === undefined) style.lineHeight = theme.sizes[size].lineHeight;
    }

    if (font !== undefined) style.font = font;
    if (fontFamily !== undefined) style.fontFamily = fontFamily;
    if (fontStyle !== undefined) style.fontStyle = fontStyle;
    if (letterSpacing !== undefined) style.letterSpacing = letterSpacing;
    if (textAlign !== undefined) style.textAlign = textAlign;
    if (textDecoration !== undefined) style.textDecoration = textDecoration;
    if (textTransform !== undefined) style.textTransform = textTransform;
    if (wordWrap !== undefined) style.wordWrap = wordWrap;
    if (wordBreak !== undefined) style.wordBreak = wordBreak;
    if (wordSpacing !== undefined) style.wordSpacing = wordSpacing;

    // background
    let background = ifUndefined(initBackground, initBg);
    if (
      background !== undefined &&
      typeof background === 'string' &&
      !background.startsWith('#') &&
      contains(AllColors, background)
    ) {
      background = theme.colors[background];
    }
    if (background !== undefined) style.background = background;

    let backgroundColor = ifUndefined(initBackgroundColor, initBgColor);
    if (backgroundColor !== undefined && !backgroundColor.startsWith('#') && contains(AllColors, backgroundColor)) {
      backgroundColor = theme.colors[backgroundColor];
    }
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
    else if (w !== undefined) style.width = w;
    else if (fullWidth) style.width = '100%';

    if (height !== undefined) style.height = height;
    else if (h !== undefined) style.height = h;
    else if (fullHeight) style.height = '100%';

    if (maxWidth !== undefined) style.maxWidth = maxWidth;
    if (minWidth !== undefined) style.minWidth = minWidth;
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
    const outlineColor =
      initOutlineColor !== undefined && !initOutlineColor.startsWith('#') && contains(AllColors, initOutlineColor)
        ? theme.colors[initOutlineColor]
        : initOutlineColor;
    if (outlineColor !== undefined) style.outlineColor = outlineColor;

    if (outlineStyle !== undefined) style.outlineStyle = outlineStyle;
    else if (outline === undefined && outlineWidth !== undefined) style.outlineStyle = 'solid';

    if (outline !== undefined) style.outline = outline;
    if (outlineWidth !== undefined) style.outlineWidth = outlineWidth;
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
