import React from 'react';
import { BoxHtmlProps, BoxProps as Props } from './Box.types';
import { CustomComponent } from '../../CustomComponent';
import './Box.scss';

export const Box = React.forwardRef<HTMLDivElement, Props>(
  (
    { component = 'div', className, center, nowrap, absolute, relative, fixed, underline, textDecoration, ...props },
    ref
  ) => {
    return (
      <CustomComponent<BoxHtmlProps>
        component={component}
        ref={ref}
        className={classnames(
          className,
          'Box',
          center && 'Box-center',
          nowrap && 'Box-nowrap',
          absolute && 'Box-absolute',
          relative && 'Box-relative',
          fixed && 'Box-fixed'
        )}
        textDecoration={textDecoration !== undefined ? textDecoration : underline ? 'underline' : undefined}
        {...props}
      />
    );
  }
);

export default Box;
