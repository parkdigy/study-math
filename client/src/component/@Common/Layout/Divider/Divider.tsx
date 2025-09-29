import React from 'react';
import { DividerProps as Props } from './Divider.types';
import './Divider.scss';

export const Divider = ({ className, vertical, width, height }: Props) => {
  return vertical ? (
    <Span className={classnames(className, 'Divider Divider-v')} height={height} />
  ) : (
    <Box className={classnames(className, 'Divider Divider-h')} width={width} />
  );
};

export default Divider;
