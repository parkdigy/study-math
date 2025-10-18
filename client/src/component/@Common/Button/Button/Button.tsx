/********************************************************************************************************************
 * Box 컴포넌트
 * ******************************************************************************************************************/

import React, { CSSProperties } from 'react';
import { AllColors, ButtonColors, DefaultColors, getDefaultOnColor } from '@theme';
import { ButtonHtmlProps, ButtonProps as Props, ButtonSizes } from './Button.types';
import { LoadingIndicator } from '../../Loadings';
import { CustomComponent } from '../../CustomComponent';
import Color from 'color';
import './Button.scss';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      type = 'button',
      variant = 'contained',
      c: initC,
      color: initColor,
      bgColor: initBgColor,
      backgroundColor: initBackgroundColor,
      reverse,
      className,
      s: initS,
      size: initSize,
      loading,
      wrapLabel,
      icon,
      iconSpacing,
      iconPosition,
      iconProps,
      fs: initFs,
      fontSize: initFontSize,
      underline,
      textDecoration,
      url,
      borderWidth: initBorderWidth,
      borderStyle: initBorderStyle,
      borderColor: initBorderColor,
      externalUrlOpenInThisTab,
      cssVars,
      onClick,
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

    const finalInitColor = ifUndefined(ifUndefined(initColor, initC), 'primary');
    const finalInitBackgroundColor = ifUndefined(initBackgroundColor, initBgColor);
    const size = ifUndefined(ifUndefined(initSize, initS), 'md');

    const isCustomColor = variant === 'contained' && finalInitBackgroundColor !== undefined;
    const isNamedColor = contains(ButtonColors, finalInitColor);
    const isDefaultColor = isNamedColor && contains(DefaultColors, finalInitColor);

    const baseColor = finalInitColor
      ? isNamedColor
        ? theme.colors[finalInitColor]
        : finalInitColor
      : variant !== 'contained'
        ? theme.colors.text
        : theme.colors.opacity10;

    let color: CSSProperties['color'] | undefined;
    let backgroundColor: CSSProperties['backgroundColor'] | undefined;
    let outlineBaseColor: CSSProperties['outlineColor'] | undefined;
    let borderWidth: Props['borderWidth'];
    let borderStyle: Props['borderStyle'];
    let borderColor: Props['borderColor'];

    if (isCustomColor) {
      color = baseColor;
      backgroundColor = contains(AllColors, finalInitBackgroundColor)
        ? theme.colors[finalInitBackgroundColor]
        : finalInitBackgroundColor;
      outlineBaseColor = backgroundColor;
    } else {
      if (variant === 'contained') {
        backgroundColor = baseColor;

        if (isDefaultColor) {
          color = theme.colors[getDefaultOnColor(finalInitColor)];
        } else {
          if (Color(backgroundColor).alpha() >= 0.4) {
            color = theme.colors.background;
          } else {
            color = theme.colors.text;
          }
        }

        if (reverse) {
          [backgroundColor, color] = [color, backgroundColor];
        }

        outlineBaseColor = baseColor;
      } else if (variant === 'outlined') {
        color = baseColor;
        borderWidth = ifUndefined(initBorderWidth, 1);
        borderStyle = ifUndefined(initBorderStyle, 'solid');
        if (initBorderColor) {
          borderColor = contains(AllColors, initBorderColor) ? theme.colors[initBorderColor] : initBorderColor;
        } else {
          borderColor = color;
        }
        backgroundColor = 'transparent';
      } else if (variant === 'text') {
        color = baseColor;
        outlineBaseColor = color;
      }
    }

    const outlineBaseColorColor = Color(outlineBaseColor!);
    const outlineColor = outlineBaseColorColor
      .alpha(outlineBaseColorColor.alpha() < 1 ? Math.max(Math.min(1 - outlineBaseColorColor.alpha(), 0.5), 0.2) : 0.5)
      .hexa();

    const sizeInfo = ButtonSizes[size];

    const finalInitFontSize = ifUndefined(initFontSize, initFs);
    let fontSize: number;
    if (finalInitFontSize !== undefined) {
      if (typeof finalInitFontSize === 'string') {
        fontSize = theme.sizes[finalInitFontSize].fontSize;
      } else {
        fontSize = finalInitFontSize;
      }
    } else {
      fontSize = sizeInfo.fontSize[variant];
    }

    iconSpacing = ifUndefined(iconSpacing, Math.round(fontSize / 2.5));

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        // URL 이 있으면 해당 URL 로 이동
        if (url) {
          if (url.includes('://')) {
            // 외부 URL
            if (externalUrlOpenInThisTab) {
              window.location.href = url;
            } else {
              window.open(url, '_blank');
            }
          } else {
            // 내부 URL
            navigate(url);
          }
        }

        onClick?.(e);
      },
      [externalUrlOpenInThisTab, onClick, url]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <CustomComponent<ButtonHtmlProps>
        component='button'
        ref={ref}
        className={classnames(
          className,
          'Button',
          `Button-variant-${variant}`,
          loading && 'Button-loading',
          props.disabled && 'Button-disabled'
        )}
        type={type}
        outlineColor={outlineColor}
        backgroundColor={backgroundColor}
        color={color}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        borderColor={borderColor}
        whiteSpace={wrapLabel ? 'wrap' : 'nowrap'}
        textDecoration={textDecoration !== underline ? textDecoration : underline ? 'underline' : undefined}
        cssVars={{
          '--button__font-size':
            typeof sizeInfo.fontSize[variant] === 'string'
              ? sizeInfo.fontSize[variant]
              : `${sizeInfo.fontSize[variant]}px`,
          '--button__line-height':
            typeof sizeInfo.lineHeight[variant] === 'string'
              ? sizeInfo.lineHeight[variant]
              : `${sizeInfo.lineHeight[variant]}`,
          '--button__font-weight':
            typeof sizeInfo.fontWeight[variant] === 'string'
              ? sizeInfo.fontWeight[variant]
              : `${sizeInfo.fontWeight[variant]}`,
          '--button__height':
            typeof sizeInfo.height[variant] === 'string' ? sizeInfo.height[variant] : `${sizeInfo.height[variant]}px`,
          '--button__border-radius':
            typeof sizeInfo.borderRadius[variant] === 'string'
              ? sizeInfo.borderRadius[variant]
              : `${sizeInfo.borderRadius[variant]}px`,
          '--button__padding-horizontal':
            typeof sizeInfo.paddingHorizontal[variant] === 'string'
              ? sizeInfo.paddingHorizontal[variant]
              : `${sizeInfo.paddingHorizontal[variant]}px`,
          ...cssVars,
        }}
        onClick={url !== undefined ? handleClick : onClick}
        {...props}
      >
        <Stack
          className='Button__Label'
          flexDirection={iconPosition === 'end' ? 'row-reverse' : 'row'}
          center
          justifyContent={variant === 'text' ? 'flex-start' : 'center'}
          spacing={iconSpacing}
        >
          {loading ? (
            <LoadingIndicator size={fontSize} color={color} />
          ) : icon ? (
            <Icon size={size} color={color} {...iconProps}>
              {icon}
            </Icon>
          ) : null}
          <div className='Button__Label__Text'>{children}</div>
        </Stack>
      </CustomComponent>
    );
  }
);

export default Button;
