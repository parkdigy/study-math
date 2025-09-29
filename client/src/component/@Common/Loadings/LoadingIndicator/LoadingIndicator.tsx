import React from 'react';
import { LoadingIndicatorProps as Props } from './LoadingIndicator.types';
import { AllColors, AllSizes, Theme } from '@theme';
import './LoadingIndicator.scss';
import { CustomComponent } from '../../CustomComponent';

export const LoadingIndicator = ({
  className,
  size: initSize = 'md',
  color: initColor = 'primary',
  ...customComponentProps
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const isNamedColor = contains(AllColors, initColor);
  const color = isNamedColor ? theme.colors[initColor as keyof Theme['colors']] : initColor;

  const isNamedSize = contains(AllSizes, initSize);
  const size = isNamedSize ? theme.sizes[initSize as keyof Theme['sizes']].fontSize : initSize;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <CustomComponent
      component='div'
      className={classnames(className, 'LoadingIndicator')}
      width={size}
      height={size}
      borderWidth={Math.ceil(size * 0.1)}
      borderLeftColor={color}
      borderRightColor={color}
      borderTopColor={color}
      {...customComponentProps}
    />
  );
};

export default LoadingIndicator;
