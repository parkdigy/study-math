import React, { CSSProperties } from 'react';
import { ChipProps as Props } from './Chip.types';
import './Chip.scss';
import { AllColors, DefaultColors, getDefaultOnColor, OpacityColors, TextColors } from '@theme';
import Color from 'color';

export const Chip = ({
  className,
  label,
  variant = 'contained',
  size = 'body',
  color: initColor,
  backgroundColor: initBackgroundColor,
  fontSize: initFontSize,
  cssVars,
  onClick,
  onRemoveClick,
  ...boxProps
}: Props) => {
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
  let border: CSSProperties['border'] | undefined;

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
      border = `1px solid ${Color(color).alpha(0.2).hexa()}`;
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
    <Stack
      className={classnames(className, 'Chip')}
      data-variant={variant}
      data-clickable={clickable}
      data-removable={removable}
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
      border={border}
      spacing={4}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      {...boxProps}
    >
      <div className='ChipLabel'>{label}</div>
      {removable && (
        <Icon
          className='ChipCloseIcon'
          color={removeIconColor}
          onClick={(e) => {
            e.stopPropagation();
            onRemoveClick();
          }}
        >
          close
        </Icon>
      )}
    </Stack>
  );
};

export default Chip;
