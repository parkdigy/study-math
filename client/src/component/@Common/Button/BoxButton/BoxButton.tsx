import React from 'react';
import { BoxButtonProps as Props } from './BoxButton.types';
import './BoxButton.scss';
import { isUrl } from '@pdg/compare';

export const BoxButton = React.forwardRef<HTMLDivElement, Props>(
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
            __navigate(url);
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
      <Box
        ref={ref}
        className={classnames(className, 'BoxButton', disabled && 'BoxButton-disabled')}
        onClick={url !== undefined ? handleClick : onClick}
        {...props}
      />
    );
  }
);

export default BoxButton;
