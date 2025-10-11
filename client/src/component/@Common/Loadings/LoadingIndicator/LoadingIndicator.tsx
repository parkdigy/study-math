import React from 'react';
import { LoadingIndicatorHtmlProps, LoadingIndicatorProps as Props } from './LoadingIndicator.types';
import { AllColors, AllSizes, Theme } from '@theme';
import './LoadingIndicator.scss';
import { CustomComponent } from '../../CustomComponent';

export const LoadingIndicator = React.forwardRef<HTMLDivElement, Props>(
  ({ className, s: initS, size: initSize, c: initC, color: initColor, ...customComponentProps }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const finalInitColor = ifUndefined(ifUndefined(initColor, initC), 'primary');
    const isNamedColor = contains(AllColors, finalInitColor);
    const color = isNamedColor ? theme.colors[finalInitColor as keyof Theme['colors']] : finalInitColor;

    const finalInitSize = ifUndefined(ifUndefined(initSize, initS), 'md');
    const isNamedSize = contains(AllSizes, finalInitSize);
    const size = isNamedSize ? theme.sizes[finalInitSize as keyof Theme['sizes']].fontSize : finalInitSize;

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <CustomComponent<LoadingIndicatorHtmlProps>
        ref={ref}
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
  }
);

export default LoadingIndicator;
