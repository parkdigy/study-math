import React, { HTMLProps } from 'react';
import { BoxProps as Props } from './Box.types';
import { CustomComponent } from '../../CustomComponent';
import { AllColors, AllSizes } from '@theme';
import './Box.scss';
import util from '@util';

export const Box = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      component = 'div',
      className,
      color: initColor,
      background: initBackground,
      backgroundColor: initBackgroundColor,
      border,
      borderWidth,
      borderStyle,
      borderColor: initBorderColor,
      borderTop,
      borderTopWidth,
      borderTopStyle,
      borderTopColor: initBorderTopColor,
      borderBottom,
      borderBottomWidth,
      borderBottomStyle,
      borderBottomColor: initBorderBottomColor,
      borderLeft,
      borderLeftWidth,
      borderLeftStyle,
      borderLeftColor: initBorderLeftColor,
      borderRight,
      borderRightWidth,
      borderRightStyle,
      borderRightColor: initBorderRightColor,
      outline,
      outlineWidth,
      outlineStyle,
      outlineColor: initOutlineColor,
      center,
      nowrap,
      absolute,
      relative,
      fixed,
      size,
      fontSize,
      underline,
      textDecoration,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const color = initColor && contains(AllColors, initColor) ? util.css.toCssVarName(initColor, 'color') : initColor;
    const background = initBackground
      ? contains(AllColors, initBackground)
        ? theme.css.vars.colors[initBackground as AllColors]
        : initBackground
      : undefined;
    const backgroundColor = initBackgroundColor
      ? contains(AllColors, initBackgroundColor)
        ? theme.css.vars.colors[initBackgroundColor as AllColors]
        : initBackgroundColor
      : undefined;
    const borderColor = initBorderColor
      ? contains(AllColors, initBorderColor)
        ? theme.css.vars.colors[initBorderColor as AllColors]
        : initBorderColor
      : undefined;
    const borderTopColor = initBorderTopColor
      ? contains(AllColors, initBorderTopColor)
        ? theme.css.vars.colors[initBorderTopColor as AllColors]
        : initBorderTopColor
      : undefined;
    const borderBottomColor = initBorderBottomColor
      ? contains(AllColors, initBorderBottomColor)
        ? theme.css.vars.colors[initBorderBottomColor as AllColors]
        : initBorderBottomColor
      : undefined;
    const borderLeftColor = initBorderLeftColor
      ? contains(AllColors, initBorderLeftColor)
        ? theme.css.vars.colors[initBorderLeftColor as AllColors]
        : initBorderLeftColor
      : undefined;
    const borderRightColor = initBorderRightColor
      ? contains(AllColors, initBorderRightColor)
        ? theme.css.vars.colors[initBorderRightColor as AllColors]
        : initBorderRightColor
      : undefined;
    const outlineColor = initOutlineColor
      ? contains(AllColors, initOutlineColor)
        ? theme.css.vars.colors[initOutlineColor as AllColors]
        : initOutlineColor
      : undefined;

    const isNamedSize = fontSize === undefined && size && contains(AllSizes, size);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <CustomComponent<HTMLProps<HTMLDivElement>>
        component={component}
        ref={ref}
        className={classnames(
          className,
          'Box',
          center && 'Box-center',
          nowrap && 'Box-nowrap',
          absolute && 'Box-absolute',
          relative && 'Box-relative',
          fixed && 'Box-fixed',
          size && isNamedSize && `font-${theme.css.names.sizes[size]}`
        )}
        color={color}
        background={background}
        backgroundColor={backgroundColor}
        border={border}
        borderWidth={borderWidth}
        borderStyle={
          borderStyle !== undefined
            ? borderStyle
            : border === undefined && borderWidth !== undefined
              ? 'solid'
              : undefined
        }
        borderColor={borderColor}
        borderTop={borderTop}
        borderTopWidth={borderTopWidth}
        borderTopStyle={
          borderTopStyle !== undefined
            ? borderTopStyle
            : borderTop === undefined && borderTopWidth !== undefined
              ? 'solid'
              : undefined
        }
        borderTopColor={borderTopColor}
        borderBottom={borderBottom}
        borderBottomWidth={borderBottomWidth}
        borderBottomStyle={
          borderBottomStyle !== undefined
            ? borderBottomStyle
            : borderBottom === undefined && borderBottomWidth !== undefined
              ? 'solid'
              : undefined
        }
        borderBottomColor={borderBottomColor}
        borderLeft={borderLeft}
        borderLeftWidth={borderLeftWidth}
        borderLeftStyle={
          borderLeftStyle !== undefined
            ? borderLeftStyle
            : borderLeft === undefined && borderLeftWidth !== undefined
              ? 'solid'
              : undefined
        }
        borderLeftColor={borderLeftColor}
        borderRightColor={borderRightColor}
        borderRight={borderRight}
        borderRightWidth={borderRightWidth}
        borderRightStyle={
          borderRightStyle !== undefined
            ? borderRightStyle
            : borderRight === undefined && borderRightWidth !== undefined
              ? 'solid'
              : undefined
        }
        outline={outline}
        outlineWidth={outlineWidth}
        outlineStyle={
          outlineStyle !== undefined
            ? outlineStyle
            : outline === undefined && outlineWidth !== undefined
              ? 'solid'
              : undefined
        }
        outlineColor={outlineColor}
        fontSize={fontSize === undefined ? (isNamedSize ? undefined : size) : fontSize}
        textDecoration={textDecoration !== undefined ? textDecoration : underline ? 'underline' : undefined}
        {...props}
      />
    );
  }
);

export default Box;
