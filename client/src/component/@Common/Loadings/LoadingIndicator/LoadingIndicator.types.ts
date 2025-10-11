import { AllColors, AllSizes } from '@theme';
import React, { CSSProperties } from 'react';
import {
  CustomComponentBorderStyles,
  CustomComponentFontStyles,
  CustomComponentPaddingStyles,
  CustomComponentProps,
  CustomComponentSizeStyles,
} from '../../CustomComponent';

export type LoadingIndicatorHtmlProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface LoadingIndicatorProps
  extends Omit<
    CustomComponentProps<LoadingIndicatorHtmlProps>,
    | 'component'
    | 'style'
    | 'children'
    | keyof CustomComponentPaddingStyles
    | keyof CustomComponentFontStyles
    | keyof CustomComponentSizeStyles
    | keyof CustomComponentBorderStyles
  > {
  s?: AllSizes | number;
  size?: AllSizes | number;
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
}
