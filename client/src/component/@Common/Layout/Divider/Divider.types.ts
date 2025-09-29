import { CSSProperties } from 'react';
import { AllColors } from '@theme';

export interface DividerProps {
  className?: string;
  vertical?: boolean;
  color?: AllColors | CSSProperties['color'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}
