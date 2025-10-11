import React from 'react';
import { CustomComponentProps, CustomComponentAllStyles } from '../../CustomComponent';

export interface BoxStyleProps extends CustomComponentAllStyles {}

export type BoxHtmlProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface BoxProps
  extends Omit<CustomComponentProps<BoxHtmlProps>, 'component' | 'style' | 'wrap' | keyof BoxStyleProps>,
    BoxStyleProps {
  component?: 'div' | 'span' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav';
  center?: boolean;
  nowrap?: boolean;
  absolute?: boolean;
  relative?: boolean;
  fixed?: boolean;
  underline?: boolean;
}
