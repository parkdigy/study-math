import React, { CSSProperties } from 'react';
import { AllColors, AllSizes } from '@theme';
import { CustomComponentProps } from '../CustomComponent';

export type IconHtmlProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export interface IconProps
  extends Omit<
    CustomComponentProps<IconHtmlProps>,
    'component' | 'style' | 'fontSize' | 'color' | 'size' | 'width' | 'height' | 'children'
  > {
  children: string;
  type?: MaterialIconTypes;
  size?: AllSizes | CSSProperties['width'];
  color?: AllColors | CSSProperties['color'];
  rotate?: number;
}
