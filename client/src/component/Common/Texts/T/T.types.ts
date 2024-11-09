import { BoxProps } from '@ccomp';
import { CSSProperties } from 'react';

export interface TProps extends Omit<BoxProps, 'display' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'color'> {
  inline?: boolean;
  center?: boolean;
  s?: CSSProperties['fontSize'];
  w?: CSSProperties['fontWeight'];
  lh?: CSSProperties['lineHeight'];
  c?: CSSProperties['color'];
}
