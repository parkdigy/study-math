import { CSSProperties, HTMLProps } from 'react';
import { AllColors, AllSizes } from '@theme';
import { CustomComponentProps } from '../CustomComponent';

export interface IconProps
  extends Omit<
    CustomComponentProps<HTMLProps<HTMLElement>>,
    'component' | 'style' | 'fontSize' | 'color' | 'size' | 'width' | 'height' | 'children'
  > {
  children: string;
  type?: MaterialIconTypes;
  size?: AllSizes | CSSProperties['width'];
  color?: AllColors | CSSProperties['color'];
  rotate?: number;
}
