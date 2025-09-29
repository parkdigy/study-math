import { CSSProperties } from 'react';

export interface StackProps extends Omit<FlexProps, 'gap'> {
  spacing?: CSSProperties['gap'];
}
