import { AllColors } from '@theme';
import { CSSProperties } from 'react';

export interface BadgeProps {
  children?: ReactNode;
  variant?: 'standard' | 'dot';
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
  bgColor?: AllColors | CSSProperties['backgroundColor'];
  backgroundColor?: AllColors | CSSProperties['backgroundColor'];
  content?: ReactNode;
  offset?: { x: number; y: number };
}
