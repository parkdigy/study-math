import React from 'react';
import { AlertProps as Props } from './Alert.types';
import { DefaultColors } from '@theme';
import Color from 'color';
import './Alert.scss';

export const Alert = React.forwardRef<HTMLDivElement, Props>(
  ({ className, type = 'info', title, showIcon, message, ...boxProps }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    let color: DefaultColors = 'primary';
    let icon: IconProps['children'] = 'Info';
    let backgroundColorRatio = 0.9;

    switch (type) {
      case 'success':
        color = 'success';
        icon = 'CheckCircle';
        backgroundColorRatio = 1.35;
        break;
      case 'warning':
        color = 'warning';
        icon = 'Warning';
        backgroundColorRatio = 0.83;
        break;
      case 'error':
        color = 'error';
        icon = 'Error';
        backgroundColorRatio = 0.82;
        break;
    }

    const baseColor = theme.colors[color];
    const backgroundColor = Color(baseColor).lighten(backgroundColorRatio).string();
    const borderColor = Color(baseColor)
      .lighten(backgroundColorRatio * 0.6)
      .string();

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <Box
        ref={ref}
        className={classnames(className, 'Alert', notEmpty(title) && 'Alert-has-title')}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        {...boxProps}
      >
        {showIcon && (
          <Icon className='Alert-icon' color={baseColor}>
            {icon}
          </Icon>
        )}
        <div className={classnames(className, 'Alert-body')}>
          {title && <div className='Alert-body-title'>{title}</div>}
          <div className='Alert-body-content'>{typeof message === 'string' ? <pre>{message}</pre> : message}</div>
        </div>
      </Box>
    );
  }
);

export default Alert;
