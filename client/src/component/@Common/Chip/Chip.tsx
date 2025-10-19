import React, { CSSProperties } from 'react';
import { ChipProps as Props } from './Chip.types';
import './Chip.scss';
import { AllColors, DefaultColors, getDefaultOnColor, OpacityColors, TextColors } from '@theme';
import Color from 'color';

export const Chip = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      label,
      variant = 'contained',
      size = 'body',
      color: initColor,
      backgroundColor: initBackgroundColor,
      fontSize: initFontSize,
      borderWidth: initBorderWidth,
      borderStyle: initBorderStyle,
      borderColor: initBorderColor,
      cssVars,
      onClick,
      onRemoveClick,
      ...boxProps
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

    const clickable = !!onClick;
    const removable = !!onRemoveClick;

    const isCustomColor = initBackgroundColor !== undefined;

    const isDefaultColor = contains(DefaultColors, initColor);
    const isTextColor = !isDefaultColor && contains(TextColors, initColor);
    const isOpacityColor = !isDefaultColor && !isTextColor && contains(OpacityColors, initColor);
    const isNamedColor = isDefaultColor || isTextColor || isOpacityColor;

    let color: CSSProperties['color'];
    let backgroundColor: CSSProperties['backgroundColor'];
    let outlineBaseColor: CSSProperties['outlineColor'];
    let removeIconColor: CSSProperties['color'];
    let borderWidth: Props['borderWidth'];
    let borderStyle: Props['borderStyle'];
    let borderColor: Props['borderColor'];

    const baseColor = initColor
      ? isNamedColor
        ? theme.colors[initColor]
        : initColor
      : variant === 'contained'
        ? theme.colors.opacity05
        : theme.colors.textAccent;

    if (isCustomColor) {
      color = baseColor;
      backgroundColor = contains(AllColors, initBackgroundColor)
        ? theme.colors[initBackgroundColor]
        : initBackgroundColor;
      outlineBaseColor = backgroundColor;
      removeIconColor = color;
    } else {
      if (variant === 'contained') {
        backgroundColor = baseColor;

        if (isDefaultColor) {
          color = theme.colors[getDefaultOnColor(initColor)];
        } else {
          if (Color(backgroundColor).alpha() > 0.4) {
            color = theme.colors.background;
          } else {
            color = theme.colors.textAccent;
          }
        }

        removeIconColor = color;
        outlineBaseColor = baseColor;
      } else if (variant === 'outlined') {
        color = baseColor;
        borderWidth = ifUndefined(initBorderWidth, 1);
        borderStyle = ifUndefined(initBorderStyle, 'solid');
        if (initBorderColor) {
          borderColor = contains(AllColors, initBorderColor) ? theme.colors[initBorderColor] : initBorderColor;
        } else {
          borderColor = initColor === undefined ? Color(color).alpha(0.2).hexa() : color;
        }
        backgroundColor = 'transparent';
        removeIconColor = color;
      }
    }

    const outlineBaseColorColor = Color(outlineBaseColor!);
    const outlineColor = outlineBaseColorColor
      .alpha(outlineBaseColorColor.alpha() < 1 ? Math.max(Math.min(1 - outlineBaseColorColor.alpha(), 0.5), 0.2) : 0.5)
      .hexa();

    const sizeInfo = theme.sizes[size];
    const fontSize = ifUndefined(initFontSize, sizeInfo.fontSize);
    const lineHeight = `${fontSize * 2.5 - (variant === 'outlined' ? 2 : 0)}px`;

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <Flex
        ref={ref}
        className={classnames(className, 'Chip', `Chip-variant-${variant}`, clickable && 'Chip-clickable')}
        cssVars={{
          '--color': color,
          '--background-color': backgroundColor,
          '--outline-color': outlineColor,
          '--font-size': `${fontSize}px`,
          '--line-height': lineHeight,
          ...cssVars,
        }}
        row
        center
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        borderColor={borderColor}
        gap={4}
        tabIndex={clickable ? 0 : undefined}
        onClick={onClick}
        {...boxProps}
      >
        <div className='Chip__Label'>{label}</div>
        {removable && (
          <Icon
            className='Chip__CloseIcon'
            color={removeIconColor}
            onClick={(e) => {
              e.stopPropagation();
              onRemoveClick();
            }}
          >
            close
          </Icon>
        )}
      </Flex>
    );
  }
);

export default Chip;
