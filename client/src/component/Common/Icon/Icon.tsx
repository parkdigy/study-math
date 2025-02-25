import React from 'react';
import { IconProps as Props } from './Icon.types';

export const Icon = ({ className, style, size, color, ...props }: Props) => {
  return (
    <i className={classnames('material-icons', className)} style={{ fontSize: size, color, ...style }} {...props} />
  );
};

export default Icon;
