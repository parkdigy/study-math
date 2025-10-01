import React from 'react';
import { StackButtonProps as Props } from './StackButton.types';
import './StackButton.scss';
import { isUrl } from '@pdg/compare';
import app from '@app';

export const StackButton = React.forwardRef<HTMLDivElement, Props>(
  ({ className, disabled, url, externalUrlOpenInThisTab, onClick, ...props }, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (url) {
          // URL 이 있으면 해당 URL 로 이동
          if (isUrl(url)) {
            // 외부 URL
            if (externalUrlOpenInThisTab) {
              window.location.href = url;
            } else {
              window.open(url, '_blank');
            }
          } else {
            // 내부 URL
            app.navigate(url);
          }
        }

        onClick?.(e);
      },
      [externalUrlOpenInThisTab, onClick, url]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <Stack
        ref={ref}
        className={classnames(className, 'StackButton', disabled && 'StackButton-disabled')}
        onClick={url !== undefined ? handleClick : onClick}
        {...props}
      />
    );
  }
);

export default StackButton;
