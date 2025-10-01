import React, { CSSProperties } from 'react';
import { TooltipProps as Props } from './Tooltip.types';
import { Tooltip as ReactTooltip, TooltipRefProps } from 'react-tooltip';
import { AllSizes, getDefaultOnColor, Theme } from '@theme';
import './Tooltip.scss';

import 'react-tooltip/dist/react-tooltip.css';

export const Tooltip = React.forwardRef<TooltipRefProps, Props>(
  ({ children, size = 'md', color, content, ...props }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const id = useId();
    const theme = useTheme();

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const isNamedSize = !!size && contains(AllSizes, size);

    const style: CSSProperties = {};
    if (color !== undefined) {
      style.backgroundColor = theme.colors[color as keyof Theme['colors']];
      style.color = theme.colors[getDefaultOnColor(color) as keyof Theme['colors']];
    }
    if (!isNamedSize) {
      style.fontSize = size;
    }

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <>
        {typeof children === 'string' ? (
          <span data-tooltip-id={id}>{children}</span>
        ) : (
          React.cloneElement(children, { 'data-tooltip-id': id } as any)
        )}
        <ReactTooltip
          ref={ref}
          id={id}
          className={classnames(
            'Tooltip',
            `Tooltip-color-${color}`,
            isNamedSize && `font-${theme.css.names.sizes[size]}`
          )}
          style={style}
          content={content as any}
          {...props}
        />
      </>
    );
  }
);

export default Tooltip;
