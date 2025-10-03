/********************************************************************************************************************
 * Box 컴포넌트
 * ******************************************************************************************************************/

import React, { CSSProperties } from 'react';
import { AllColors, ButtonColors, DefaultColors, getDefaultOnColor } from '@theme';
import { ButtonProps as Props } from './Button.types';
import { LoadingIndicator } from '../../Loadings';
import { CustomComponent, CustomComponentProps } from '../../CustomComponent';
import Color from 'color';
import app from '@app';
import './Button.scss';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant = 'contained',
      color: initColor = 'primary',
      backgroundColor: initBackgroundColor,
      reverse,
      className,
      size = 'md',
      loading,
      wrapLabel,
      icon,
      iconSpacing,
      iconPosition,
      iconProps,
      fontSize: initFontSize,
      underline,
      textDecoration,
      ph,
      pv,
      borderRadius,
      url,
      externalUrlOpenInThisTab,
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

    const isCustomColor = variant === 'contained' && initBackgroundColor !== undefined;
    const isNamedColor = contains(ButtonColors, initColor);
    const isDefaultColor = isNamedColor && contains(DefaultColors, initColor);

    const baseColor = initColor
      ? isNamedColor
        ? theme.colors[initColor]
        : initColor
      : variant !== 'contained'
        ? theme.colors.text
        : theme.colors.opacity10;

    let color: CSSProperties['color'] | undefined;
    let backgroundColor: CSSProperties['backgroundColor'] | undefined;
    let outlineBaseColor: CSSProperties['outlineColor'] | undefined;
    let border: CSSProperties['border'] | undefined;

    if (isCustomColor) {
      color = baseColor;
      backgroundColor = contains(AllColors, initBackgroundColor)
        ? theme.colors[initBackgroundColor]
        : initBackgroundColor;
      outlineBaseColor = backgroundColor;
    } else {
      if (variant === 'contained') {
        backgroundColor = baseColor;

        if (isDefaultColor) {
          color = theme.colors[getDefaultOnColor(initColor)];
        } else {
          if (Color(backgroundColor).alpha() > 0.4) {
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
        border = `1px solid ${color}`;
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

    const sizeCssName = theme.css.names.sizes[size];
    const sizeInfo = theme.sizes[size];
    const fontSize = ifUndefined(initFontSize, sizeInfo.fontSize);

    // variant 가 text 아닐 때, padding, borderRadius 설정
    if (variant !== 'text') {
      ph = ifUndefined(ph, fontSize);
      pv = ifUndefined(pv, Math.round(fontSize * 0.6));
      borderRadius = ifUndefined(borderRadius, Math.round(fontSize * 0.3));
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
            app.navigate(url);
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
      <CustomComponent<CustomComponentProps<React.ButtonHTMLAttributes<HTMLButtonElement>>>
        component='button'
        ref={ref}
        className={classnames(
          className,
          'Button',
          `Button-size-${sizeCssName}`,
          `Button-variant-${variant}`,
          variant === 'text' ? `font-${sizeCssName}` : `font-size-${sizeCssName}`,
          loading && 'Button-loading'
        )}
        outlineColor={outlineColor}
        backgroundColor={backgroundColor}
        color={color}
        border={border}
        whiteSpace={wrapLabel ? 'wrap' : 'nowrap'}
        ph={ph}
        pv={pv}
        borderRadius={borderRadius}
        textDecoration={textDecoration !== underline ? textDecoration : underline ? 'underline' : undefined}
        onClick={url !== undefined ? handleClick : onClick}
        {...props}
      >
        <Stack
          className='Button-label'
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
          <div className='Button-label-text'>{children}</div>
        </Stack>
      </CustomComponent>
    );
  }
);

export default Button;
