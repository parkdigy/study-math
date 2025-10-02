import { HTMLProps } from 'react';
import { CSSProperties } from 'react';
import { CustomComponentProps, CustomComponentAllStyles } from '../../CustomComponent';
import { AllColors, FriendlyNameSizes } from '@theme';
import { Sizes } from '@theme';

export interface BoxStyleProps extends Omit<CustomComponentAllStyles, 'color'> {
  color?: AllColors | CSSProperties['color'];
  background?: AllColors | CSSProperties['background'];
  backgroundColor?: AllColors | CSSProperties['backgroundColor'];
  borderColor?: AllColors | CSSProperties['borderColor'];
  borderLeftColor?: AllColors | CSSProperties['borderLeftColor'];
  borderRightColor?: AllColors | CSSProperties['borderRightColor'];
  borderTopColor?: AllColors | CSSProperties['borderTopColor'];
  borderBottomColor?: AllColors | CSSProperties['borderBottomColor'];
  outlineColor?: AllColors | CSSProperties['outlineColor'];
  size?: Sizes | FriendlyNameSizes | CSSProperties['fontSize'];
}

export interface BoxProps
  extends Omit<
      CustomComponentProps<HTMLProps<HTMLDivElement>>,
      'component' | 'style' | 'wrap' | 'size' | keyof BoxStyleProps
    >,
    BoxStyleProps {
  component?: 'div' | 'span' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav';
  center?: boolean;
}
