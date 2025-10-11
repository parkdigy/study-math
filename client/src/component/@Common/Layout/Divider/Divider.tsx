import React from 'react';
import { DividerProps as Props } from './Divider.types';
import './Divider.scss';

export const Divider = ({ className, vertical, c, color, w, width, h, height }: Props) => {
  return vertical ? (
    <Span
      className={classnames(className, 'Divider Divider-v')}
      h={h}
      height={height}
      borderLeftColor={ifUndefined(color, c)}
    />
  ) : (
    <Box
      className={classnames(className, 'Divider Divider-h')}
      w={w}
      width={width}
      borderTopColor={ifUndefined(color, c)}
    />
  );
};

export default Divider;
