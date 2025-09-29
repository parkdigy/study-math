import { BoxProps } from '@ccomp';
import { CSSProperties } from 'react';

export interface TProps extends Omit<BoxProps, 'display'> {
  inline?: boolean;
  icon?: string;
  iconSpacing?: CSSProperties['gap'];
  iconPosition?: 'start' | 'end';
  iconProps?: Omit<IconProps, 'children'>;
  ellipsis?: boolean;
}
