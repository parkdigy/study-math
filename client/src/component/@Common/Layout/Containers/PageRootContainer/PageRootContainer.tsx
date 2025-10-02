import React from 'react';
import { PageRootContainerProps as Props } from './PageRootContainer.types';
import { ContentContainer } from '../ContentContainer';

export const PageRootContainer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, fullScreen, flex, containerProps, ...props }, ref) => {
    return (
      <ContentContainer
        ref={ref}
        className={classnames(className, 'PageRootContainer')}
        pv={20}
        flex={fullScreen ? 1 : flex}
        containerProps={fullScreen ? { ...containerProps, flex: 1 } : containerProps}
        {...props}
      />
    );
  }
);

export default PageRootContainer;
