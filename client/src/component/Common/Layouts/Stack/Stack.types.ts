import { BoxProps } from '@ccomp';

export interface StackProps extends Omit<BoxProps, 'display' | 'gap'> {
  row?: boolean;
  center?: boolean;
  wrap?: boolean;
  spacing?: number;
}
