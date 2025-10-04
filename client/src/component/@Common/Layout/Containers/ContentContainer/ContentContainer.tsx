import React from 'react';
import { ContentContainerProps as Props } from './ContentContainer.types';
import './ContentContainer.scss';

export const ContentContainer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, containerProps, ...props }, ref) => {
    return (
      <Flex className='ContentContainer' ref={ref} center {...containerProps}>
        <Stack className={classnames(className, 'ContentContainer__Content')} {...props}>
          {children}
        </Stack>
      </Flex>
    );
  }
);

export default ContentContainer;
