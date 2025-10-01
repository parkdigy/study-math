import React from 'react';
import { StackProps as Props } from './Stack.types';

export const Stack = React.forwardRef<HTMLDivElement, Props>(({ spacing, ...props }, ref) => {
  return <Flex ref={ref} gap={spacing} {...props} />;
});

export default Stack;
