import React from 'react';
import { ContentContainerProps as Props } from './ContentContainer.types';
import './ContentContainer.scss';

export const ContentContainer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, backgroundColor, flex, ...props }, ref) => {
    return (
      <Flex
        className={classnames(className, 'ContentContainer')}
        ref={ref}
        center
        flex={flex}
        backgroundColor={backgroundColor}
      >
        <Flex className='ContentContainer-content' flex={flex} {...props} />
      </Flex>
    );
  }
);

export default ContentContainer;
