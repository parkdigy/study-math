import React, { CSSProperties } from 'react';
import { IconButtonProps as Props } from './IconButton.types';
import { AllColors, AllSizes, DefaultColors, getDefaultOnColor, OpacityColors, TextColors } from '@theme';
import Color from 'color';
import './IconButton.scss';
import { isUrl } from '@pdg/compare';
import app from '@app';

export const IconButton = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      children,
      variant = 'default',
      size: initSize = 'md',
      p: initP,
      color: initColor,
      backgroundColor: initBackgroundColor,
      iconProps,
      disabled,
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

    const isCustomColor = variant === 'rounded' && initBackgroundColor !== undefined;

    const isDefaultColor = contains(DefaultColors, initColor);
    const isTextColor = !isDefaultColor && contains(TextColors, initColor);
    const isOpacityColor = !isDefaultColor && !isTextColor && contains(OpacityColors, initColor);
    const isNamedColor = isDefaultColor || isTextColor || isOpacityColor;

    const baseColor = initColor
      ? isNamedColor
        ? theme.colors[initColor]
        : initColor
      : variant === 'default'
        ? theme.colors.text
        : theme.colors.opacity10;

    let color: CSSProperties['color'] | undefined;
    let backgroundColor: CSSProperties['backgroundColor'] | undefined;
    let outlineBaseColor: CSSProperties['outlineColor'] | undefined;

    if (isCustomColor) {
      color = baseColor;
      backgroundColor = contains(AllColors, initBackgroundColor)
        ? theme.colors[initBackgroundColor]
        : initBackgroundColor;
      outlineBaseColor = backgroundColor;
    } else {
      if (variant === 'default') {
        color = baseColor;

        outlineBaseColor = color;
      } else if (variant === 'rounded') {
        backgroundColor = baseColor;
        outlineBaseColor = baseColor;

        if (isDefaultColor) {
          color = theme.colors[getDefaultOnColor(initColor)];
        } else {
          if (Color(backgroundColor).alpha() > 0.4) {
            color = theme.colors.background;
          } else {
            color = theme.colors.text;
          }
        }
      }
    }

    const outlineBaseColorColor = Color(outlineBaseColor!);
    const outlineColor = outlineBaseColorColor
      .alpha(outlineBaseColorColor.alpha() < 1 ? Math.max(Math.min(1 - outlineBaseColorColor.alpha(), 0.5), 0.2) : 0.5)
      .hexa();

    const isNamedSize = contains(AllSizes, initSize);
    const size = (isNamedSize ? theme.sizes[initSize].fontSize : initSize) * 1.2;
    const p = ifUndefined(initP, variant === 'rounded' ? 5 + size * 0.1 : undefined);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (url) {
          // URL 이 있으면 해당 URL 로 이동
          if (isUrl(url)) {
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
      <Box
        ref={ref}
        className={classnames(
          className,
          'IconButton',
          `IconButton-variant-${variant}`,
          disabled && 'IconButton-disabled'
        )}
        cssVars={{ '--color': color, '--background-color': backgroundColor, '--outline-color': outlineColor }}
        p={p}
        tabIndex={disabled ? -1 : 0}
        onClick={url !== undefined ? handleClick : onClick}
        {...props}
      >
        <Icon size={size} {...iconProps}>
          {children}
        </Icon>
      </Box>
    );
  }
);

export default IconButton;
