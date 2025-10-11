import React, { CSSProperties } from 'react';
import { AllColors, AllSizes } from '@theme';
import { CustomComponentFontStyles, CustomComponentProps, CustomComponentSizeStyles } from '../CustomComponent';

export type IconHtmlProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export interface IconProps
  extends Omit<
    CustomComponentProps<IconHtmlProps>,
    'component' | 'style' | 'children' | keyof CustomComponentFontStyles | keyof CustomComponentSizeStyles
  > {
  children: string;
  type?: MaterialIconTypes;
  s?: AllSizes | CSSProperties['width'];
  size?: AllSizes | CSSProperties['width'];
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
  rotate?: number;
}
