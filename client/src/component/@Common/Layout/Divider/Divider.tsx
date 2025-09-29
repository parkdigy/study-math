import React from 'react';
import { DividerProps as Props } from './Divider.types';
import './Divider.scss';

export const Divider = ({ className, vertical, color, width, height }: Props) => {
  return vertical ? (
    <Span className={classnames(className, 'Divider Divider-v')} height={height} borderLeftColor={color} />
  ) : (
    <Box className={classnames(className, 'Divider Divider-h')} width={width} borderTopColor={color} />
  );
};

export default Divider;
