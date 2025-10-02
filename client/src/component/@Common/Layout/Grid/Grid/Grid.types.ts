import { AllScreenAliases } from '@theme';
import { CustomComponentFlexStyles } from '../../../CustomComponent';

export interface GridInnerProps {
  inner_num: number;
}

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps extends Omit<BoxProps, 'display' | 'cols' | keyof CustomComponentFlexStyles> {
  cols?: GridCols | Partial<Record<AllScreenAliases, GridCols>>;
  spacing?: number | string;
}
