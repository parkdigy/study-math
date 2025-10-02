import { BoxProps } from '@ccomp';
import { CSSProperties } from 'react';

export interface TProps extends Omit<BoxProps, 'display' | 'color'> {
  inline?: boolean;
  icon?: string;
  color?: BoxProps['color'] | 'accent' | 'blurry' | 'lighten';
  iconSpacing?: CSSProperties['gap'];
  iconPosition?: 'start' | 'end';
  iconProps?: Omit<IconProps, 'children'>;
  ellipsis?: boolean;
}
