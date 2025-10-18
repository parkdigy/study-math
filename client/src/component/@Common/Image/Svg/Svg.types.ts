import { Props as ReactSvgProps } from 'react-svg';
import { AllColors } from '@theme';
import { CSSProperties } from 'react';

export interface SvgProps extends Omit<ReactSvgProps, 'ref'> {
  w?: ReactSvgProps['width'];
  h?: ReactSvgProps['height'];
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
}
