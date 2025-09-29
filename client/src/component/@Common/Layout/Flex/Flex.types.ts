import { BoxProps } from '@ccomp';

export interface FlexProps extends Omit<BoxProps, 'display'> {
  row?: boolean;
  wrap?: boolean;
  centerJustify?: boolean;
  inline?: boolean;
}
