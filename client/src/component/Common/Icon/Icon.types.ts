import { HTMLProps } from 'react';

export interface IconProps extends Omit<HTMLProps<HTMLElement>, 'fontSize' | 'size'> {
  size?: number;
  color?: string;
}
