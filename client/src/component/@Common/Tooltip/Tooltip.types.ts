import { ITooltip } from 'react-tooltip';
import { AllSizes, DefaultColors } from '@theme';
import { CSSProperties } from 'react';

export interface TooltipProps extends Omit<ITooltip, 'id' | 'variant' | 'content'> {
  children: ReactElement | string;
  size?: AllSizes | CSSProperties['fontSize'];
  color?: DefaultColors;
  content?: ReactNode;
}
