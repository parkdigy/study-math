import { BoxProps } from '@ccomp';

export interface FlexProps extends Omit<BoxProps, 'display'> {
  row?: boolean;
}
