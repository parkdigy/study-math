import React from 'react';
import { PageRootContainerProps as Props } from './PageRootContainer.types';
import { ContentContainer } from '../ContentContainer';

export const PageRootContainer = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  return <ContentContainer ref={ref} className={classnames(className, 'PageRootContainer')} pv={20} {...props} />;
});

export default PageRootContainer;
