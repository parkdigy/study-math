import React from 'react';
import { FlexProps as Props } from './Flex.types';
import Box from '../Box';
import './Flex.scss';

export const Flex = ({ className, row, center, centerJustify, wrap, inline, ...props }: Props) => {
  return (
    <Box
      className={classnames(
        className,
        'Flex',
        row && 'Flex-row',
        center && 'Flex-center-a',
        centerJustify && 'Flex-center-j',
        wrap && 'Flex-wrap',
        inline && 'Flex-inline'
      )}
      {...props}
    />
  );
};

export default Flex;
