import React from 'react';
import { PageRootContainerProps as Props } from './PageRootContainer.types';
import { ContentContainer } from '../ContentContainer';

export const PageRootContainer = ({ className, ...props }: Props) => {
  return <ContentContainer className={classnames(className, 'PageRootContainer')} pv={20} {...props} />;
};

export default PageRootContainer;
