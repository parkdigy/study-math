import React from 'react';
import { ColProps as Props } from './Col.types';
import './Col.scss';

export const Col = ({ children, className, cols = 1, ...props }: Props) => {
  const innerNum = (props as any)['data-inner-num'];

  return (
    <Box className={classnames(className, 'GridCol', innerNum === 1 && 'GridCol-first', `GridCol-${cols}`)} {...props}>
      {children}
    </Box>
  );
};

export default Col;
