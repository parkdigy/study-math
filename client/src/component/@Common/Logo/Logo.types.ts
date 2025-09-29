import { AllSizes } from '@theme';
import { CSSProperties } from 'react';

export interface LogoProps {
  size?: AllSizes;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  onClick?: () => void;
}
