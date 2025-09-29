import { AllColors, AllSizes } from '@theme';
import { CSSProperties, HTMLProps } from 'react';
import { CustomComponentProps } from '../../CustomComponent';

export interface LoadingIndicatorProps
  extends Omit<
    CustomComponentProps<HTMLProps<HTMLElement>>,
    | 'component'
    | 'style'
    // padding
    | 'padding'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingBottom'
    // font
    | 'font'
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeight'
    | 'fontStyle'
    | 'letterSpacing'
    | 'lineHeight'
    | 'textAlign'
    | 'textDecoration'
    | 'textTransform'
    | 'color'
    // size
    | 'size'
    | 'width'
    | 'height'
    | 'maxWidth'
    | 'minWidth'
    | 'maxHeight'
    | 'minHeight'
    // border
    | 'border'
    | 'borderWidth'
    | 'borderStyle'
    | 'borderColor'
    | 'borderLeft'
    | 'borderLeftWidth'
    | 'borderLeftStyle'
    | 'borderLeftColor'
    | 'borderRight'
    | 'borderRightWidth'
    | 'borderRightStyle'
    | 'borderRightColor'
    | 'borderTop'
    | 'borderTopWidth'
    | 'borderTopStyle'
    | 'borderTopColor'
    | 'borderBottom'
    | 'borderBottomWidth'
    | 'borderBottomStyle'
    | 'borderBottomColor'
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'children'
  > {
  size?: AllSizes | number;
  color?: AllColors | CSSProperties['color'];
}
