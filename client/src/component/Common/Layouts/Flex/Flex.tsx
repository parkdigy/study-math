import React from 'react';
import { FlexProps as Props } from './Flex.types';
import Box from '../Box';

export const Flex = ({ row, flexDirection, ...props }: Props) => {
  return <Box display='flex' flexDirection={ifUndefined(flexDirection, row ? 'row' : 'column')} {...props} />;
};

export default Flex;
