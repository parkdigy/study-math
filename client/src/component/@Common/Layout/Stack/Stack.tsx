import React from 'react';
import { StackProps as Props } from './Stack.types';

export const Stack = ({ spacing, ...props }: Props) => {
  return <Flex gap={spacing} {...props} />;
};

export default Stack;
