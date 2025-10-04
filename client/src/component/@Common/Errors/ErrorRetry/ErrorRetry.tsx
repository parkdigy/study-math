/********************************************************************************************************************
 * 에러 발생 시 재시도 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { ErrorRetryProps as Props } from './ErrorRetry.types';
import { Button } from '../../Button';
import Icon from '../../Icon';
import './ErrorRetry.scss';
import { getDefaultOnColor } from '@theme';

const ErrorRetry = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      title,
      message,
      color,
      fullScreen,
      fullSize,
      retryLabel = '재시도',
      onRetry,
      // Tooltip 지원
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <div
        ref={ref}
        className={classnames(
          className,
          'ErrorRetry',
          fullScreen && 'ErrorRetry-full-screen',
          fullSize && 'ErrorRetry-full-size'
        )}
      >
        <Box
          className='ErrorRetry__Content'
          color={color ? theme.css.vars.colors[getDefaultOnColor(color)] : undefined}
          backgroundColor={color ? theme.css.vars.colors[color] : undefined}
          {...props}
        >
          <Icon color={color ? undefined : 'opacity50'} size={32}>
            error
          </Icon>
          <div>
            {title && <div className='ErrorRetry__Content__Title'>{title}</div>}
            {message ? (
              <>{typeof message === 'string' ? <pre>{message}</pre> : message}</>
            ) : (
              <Box>
                문제가 발생했습니다.
                {onRetry && (
                  <>
                    <br />
                    잠시 후 {retryLabel} 해주세요.
                  </>
                )}
              </Box>
            )}
          </div>
          {onRetry && (
            <Button
              color={ifUndefined(color, 'opacity15')}
              reverse={!!color}
              className='ErrorRetry-button'
              mt={5}
              onClick={onRetry}
            >
              {retryLabel}
            </Button>
          )}
        </Box>
      </div>
    );
  }
);

export default ErrorRetry;
