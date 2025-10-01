import React from 'react';
import { TProps as Props } from './T.types';
import { Sizes, Theme } from '@theme';
import './T.scss';

export const T = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, inline, size, icon, iconSpacing, iconPosition, iconProps, ellipsis, ...props }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const isNamedSize = contains(Sizes, size);
    const fontSize = isNamedSize ? theme.sizes[size as keyof Theme['sizes']]?.fontSize : undefined;

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return icon ? (
      <Stack
        ref={ref}
        className={classnames(className, 'T', ellipsis && 'T-ellipsis')}
        center
        flexDirection={iconPosition === 'end' ? 'row-reverse' : 'row'}
        size={size}
        spacing={iconSpacing !== undefined ? iconSpacing : fontSize ? Math.ceil(fontSize * 0.4) : 5}
        {...props}
      >
        <Icon size={size} {...iconProps}>
          {icon}
        </Icon>
        <span className='T-text'>{children}</span>
      </Stack>
    ) : (
      <Box
        ref={ref}
        component={inline ? 'span' : 'div'}
        className={classnames(className, 'T', ellipsis && 'T-ellipsis')}
        size={size}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default T;
