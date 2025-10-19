import React from 'react';
import { TProps as Props } from './T.types';
import { Sizes, Theme } from '@theme';
import './T.scss';

export const T = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      children,
      inline,
      size,
      c: initC,
      color: initColor,
      icon,
      iconGap,
      iconPosition,
      iconProps,
      ellipsis,
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

    const isNamedSize = contains(Sizes, size);
    const fontSize = isNamedSize ? theme.sizes[size as keyof Theme['sizes']]?.fontSize : undefined;

    const finalInitColor = initC || initColor;
    const finalColor: BoxProps['color'] =
      finalInitColor === undefined
        ? undefined
        : finalInitColor === 'accent'
          ? 'textAccent'
          : finalInitColor === 'blurry'
            ? 'textBlurry'
            : finalInitColor === 'lighten'
              ? 'textLighten'
              : finalInitColor;

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return icon ? (
      <Flex
        ref={ref}
        className={classnames(className, 'T', ellipsis && 'T-ellipsis')}
        center
        flexDirection={iconPosition === 'end' ? 'row-reverse' : 'row'}
        size={size}
        color={finalColor}
        gap={iconGap !== undefined ? iconGap : fontSize ? Math.ceil(fontSize * 0.4) : 5}
        {...props}
      >
        <Icon size={size} {...iconProps}>
          {icon}
        </Icon>
        <span className='T__Text'>{children}</span>
      </Flex>
    ) : (
      <Box
        ref={ref}
        component={inline ? 'span' : 'div'}
        className={classnames(className, 'T', ellipsis && 'T-ellipsis')}
        size={size}
        color={finalColor}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default T;
