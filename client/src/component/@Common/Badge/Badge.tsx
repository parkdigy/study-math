import React, { CSSProperties } from 'react';
import { BadgeProps as Props } from './Badge.types';
import './Badge.scss';
import { AllColors, ButtonColors, DefaultColors, getDefaultOnColor } from '@theme';
import Color from 'color';

export const Badge = ({
  children,
  variant = 'standard',
  content,
  c: initC,
  color: initColor,
  bgColor: initBgColor,
  backgroundColor: initBackgroundColor,
  offset,
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/
  const finalInitColor = ifUndefined(ifUndefined(initColor, initC), 'error');
  const finalInitBackgroundColor = ifUndefined(initBackgroundColor, initBgColor);

  const isCustomColor = finalInitBackgroundColor !== undefined;
  const isNamedColor = contains(ButtonColors, finalInitColor);
  const isDefaultColor = isNamedColor && contains(DefaultColors, finalInitColor);

  const baseColor = isNamedColor ? theme.colors[finalInitColor] : finalInitColor;

  let color: CSSProperties['color'] | undefined;
  let backgroundColor: CSSProperties['backgroundColor'] | undefined;

  if (isCustomColor) {
    color = baseColor;
    backgroundColor = contains(AllColors, finalInitBackgroundColor)
      ? theme.colors[finalInitBackgroundColor]
      : finalInitBackgroundColor;
  } else {
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
  }
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='Badge'>
      <div className='Badge__Inner'>
        {children}
        {content !== undefined && (
          <div
            className={`Badge__Content Badge__Content-${variant}`}
            style={
              {
                '--Badge__Content-color': color,
                '--Badge__Content-background-color': backgroundColor,
                '--Badge__Content-offset-x': `${ifUndefined(offset?.x, 0)}px`,
                '--Badge__Content-offset-y': `${ifUndefined(offset?.y, 0)}px`,
              } as CSSProperties
            }
          >
            {variant === 'standard' ? content : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Badge;
