import React from 'react';
import { FlexButtonProps as Props } from './FlexButton.types';
import './FlexButton.scss';
import { isUrl } from '@pdg/compare';

export const FlexButton = React.forwardRef<HTMLDivElement, Props>(
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
      <Flex
        ref={ref}
        className={classnames(className, 'FlexButton', disabled && 'FlexButton-disabled')}
        onClick={url !== undefined ? handleClick : onClick}
        {...props}
      />
    );
  }
);

export default FlexButton;
