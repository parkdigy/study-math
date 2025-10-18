import React from 'react';
import {
  CustomComponentBackgroundStyles,
  CustomComponentBorderStyles,
  CustomComponentCustomStyles,
  CustomComponentMarginStyles,
  CustomComponentPaddingStyles,
  CustomComponentPositionStyles,
  CustomComponentProps,
  CustomComponentTransformStyles,
  CustomComponentTransitionStyles,
} from '../../CustomComponent';

export const ImgStyles = {
  ...CustomComponentPaddingStyles,
  ...CustomComponentMarginStyles,
  ...CustomComponentBorderStyles,
  ...CustomComponentBackgroundStyles,
  ...CustomComponentPositionStyles,
  ...CustomComponentCustomStyles,
  ...CustomComponentTransitionStyles,
  ...CustomComponentTransformStyles,
};
export type ImgStyles = (typeof ImgStyles)[number];

export type ImgHtmlProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export interface ImgProps
  extends Omit<ImgHtmlProps, 'children' | 'style'>,
    Pick<CustomComponentProps<ImgHtmlProps>, ImgStyles | 'w' | 'h'> {
  // 회전 각도
  rotate?: number;
}
