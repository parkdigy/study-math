import { BoxProps } from '@ccomp';

export interface FlexProps extends Omit<BoxProps, 'display'> {
  // display
  inline?: boolean;
  // flexDirection
  row?: boolean;
  reverse?: boolean;
  // flexWrap
  wrap?: boolean;
  // alignItems
  stretchAlign?: boolean;
  startAlign?: boolean;
  endAlign?: boolean;
  flexStartAlign?: boolean;
  flexEndAlign?: boolean;
  selfStartAlign?: boolean;
  selfEndAlign?: boolean;
  baselineAlign?: boolean;
  // justifyContent
  centerJustify?: boolean;
  startJustify?: boolean;
  endJustify?: boolean;
  flexStartJustify?: boolean;
  flexEndJustify?: boolean;
  leftJustify?: boolean;
  rightJustify?: boolean;
  spaceBetweenJustify?: boolean;
  spaceAroundJustify?: boolean;
  spaceEvenlyJustify?: boolean;
}
