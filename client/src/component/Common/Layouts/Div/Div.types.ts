import { BoxProps } from '@ccomp';

export interface DivProps extends Omit<BoxProps, 'display'> {
  center?: boolean;
}
