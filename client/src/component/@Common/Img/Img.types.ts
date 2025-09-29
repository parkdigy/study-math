import React, { HTMLProps } from 'react';
import { CustomComponentProps } from '../CustomComponent';

export interface ImgProps
  extends Omit<
      React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
      'children' | 'style'
    >,
    Pick<
      CustomComponentProps<HTMLProps<HTMLImageElement>>,
      // padding
      | 'padding'
      | 'paddingLeft'
      | 'paddingRight'
      | 'paddingTop'
      | 'paddingBottom'
      // margin
      | 'margin'
      | 'marginLeft'
      | 'marginRight'
      | 'marginTop'
      | 'marginBottom'
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
      // background
      | 'background'
      | 'backgroundColor'
      | 'backgroundImage'
      | 'backgroundPosition'
      | 'backgroundSize'
      | 'backgroundRepeat'
      // position
      | 'position'
      | 'top'
      | 'left'
      | 'right'
      | 'bottom'
      | 'zIndex'
      // size
      | 'width'
      | 'maxWidth'
      | 'minWidth'
      | 'height'
      | 'maxHeight'
      | 'minHeight'
      // custom
      | 'p'
      | 'ph'
      | 'pv'
      | 'pl'
      | 'pr'
      | 'pt'
      | 'pb'
      | 'm'
      | 'mh'
      | 'mv'
      | 'ml'
      | 'mr'
      | 'mt'
      | 'mb'
      | 'fullWidth'
      | 'fullHeight'
    > {}
