import React from 'react';
import { StackProps as Props } from './Stack.types';
import Box from '../Box';

export const Stack = ({ row, center, wrap, alignItems, flexDirection, flexWrap, spacing, ...props }: Props) => {
  return (
    <Box
      display='flex'
      flexDirection={ifUndefined(flexDirection, row ? 'row' : 'column')}
      flexWrap={ifUndefined(flexWrap, wrap ? 'wrap' : 'nowrap')}
      alignItems={ifUndefined(alignItems, center ? 'center' : undefined)}
      gap={spacing}
      {...props}
    />
  );
};

export default Stack;
