import React from 'react';
import { CSSProperties } from 'react';

/********************************************************************************************************************
 * Padding
 * ******************************************************************************************************************/

const CustomComponentPaddingBaseStyles = [
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
] as const;
type CustomComponentPaddingBaseStyles = Pick<CSSProperties, (typeof CustomComponentPaddingBaseStyles)[number]>;

const CustomComponentPaddingCustomStyles = ['p', 'pl', 'pr', 'pt', 'pb', 'ph', 'pv'] as const;
type CustomComponentPaddingCustomStyles = {
  p?: CSSProperties['padding'];
  pl?: CSSProperties['paddingLeft'];
  pr?: CSSProperties['paddingRight'];
  pt?: CSSProperties['paddingTop'];
  pb?: CSSProperties['paddingBottom'];
  ph?: CSSProperties['paddingLeft'];
  pv?: CSSProperties['paddingTop'];
};

export const CustomComponentPaddingStyles = [
  ...CustomComponentPaddingBaseStyles,
  ...CustomComponentPaddingCustomStyles,
] as const;
export type CustomComponentPaddingStyles = CustomComponentPaddingBaseStyles & CustomComponentPaddingCustomStyles;

/********************************************************************************************************************
 * Margin
 * ******************************************************************************************************************/

const CustomComponentMarginBaseStyles = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'] as const;
type CustomComponentMarginBaseStyles = Pick<CSSProperties, (typeof CustomComponentMarginBaseStyles)[number]>;

const CustomComponentMarginCustomStyles = ['m', 'ml', 'mr', 'mt', 'mb', 'mh', 'mv'] as const;
type CustomComponentMarginCustomStyles = {
  m?: CSSProperties['margin'];
  ml?: CSSProperties['marginLeft'];
  mr?: CSSProperties['marginRight'];
  mt?: CSSProperties['marginTop'];
  mb?: CSSProperties['marginBottom'];
  mh?: CSSProperties['marginLeft'];
  mv?: CSSProperties['marginTop'];
};

export const CustomComponentMarginStyles = [
  ...CustomComponentMarginBaseStyles,
  ...CustomComponentMarginCustomStyles,
] as const;
export type CustomComponentMarginStyles = CustomComponentMarginBaseStyles & CustomComponentMarginCustomStyles;

/********************************************************************************************************************
 * Border
 * ******************************************************************************************************************/

export const CustomComponentBorderStyles = [
  'border',
  'borderWidth',
  'borderStyle',
  'borderColor',
  'borderLeft',
  'borderLeftWidth',
  'borderLeftStyle',
  'borderLeftColor',
  'borderRight',
  'borderRightWidth',
  'borderRightStyle',
  'borderRightColor',
  'borderTop',
  'borderTopWidth',
  'borderTopStyle',
  'borderTopColor',
  'borderBottom',
  'borderBottomWidth',
  'borderBottomStyle',
  'borderBottomColor',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
] as const;
export type CustomComponentBorderStyles = Pick<CSSProperties, (typeof CustomComponentBorderStyles)[number]>;

/********************************************************************************************************************
 * Flex
 * ******************************************************************************************************************/

export const CustomComponentFlexStyles = [
  'flex',
  'gap',
  'flexDirection',
  'flexBasis',
  'flexFlow',
  'flexShrink',
  'flexGrow',
  'flexWrap',
  'alignItems',
  'alignSelf',
  'alignContent',
  'alignTracks',
  'justifyItems',
  'justifySelf',
  'justifyContent',
  'justifyTracks',
] as const;
export type CustomComponentFlexStyles = Pick<CSSProperties, (typeof CustomComponentFlexStyles)[number]>;

/********************************************************************************************************************
 * Font
 * ******************************************************************************************************************/

const CustomComponentFontBaseStyles = [
  'font',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textDecoration',
  'textTransform',
  'whiteSpace',
  'wordWrap',
  'wordBreak',
  'wordSpacing',
  'color',
] as const;
type CustomComponentFontBaseStyles = Pick<CSSProperties, (typeof CustomComponentFontBaseStyles)[number]> & {
  fontWeight?: 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

const CustomComponentFontCustomStyles = ['bold'] as const;
type CustomComponentFontCustomStyles = {
  bold?: boolean;
};

export const CustomComponentFontStyles = [
  ...CustomComponentFontBaseStyles,
  ...CustomComponentFontCustomStyles,
] as const;
export type CustomComponentFontStyles = CustomComponentFontBaseStyles & CustomComponentFontCustomStyles;

/********************************************************************************************************************
 * Background
 * ******************************************************************************************************************/

export const CustomComponentBackgroundStyles = [
  'background',
  'backgroundColor',
  'backgroundImage',
  'backgroundPosition',
  'backgroundSize',
  'backgroundRepeat',
] as const;
export type CustomComponentBackgroundStyles = Pick<CSSProperties, (typeof CustomComponentBackgroundStyles)[number]>;

/********************************************************************************************************************
 * Position
 * ******************************************************************************************************************/

export const CustomComponentPositionStyles = ['position', 'top', 'left', 'right', 'bottom', 'zIndex'] as const;
export type CustomComponentPositionStyles = Pick<CSSProperties, (typeof CustomComponentPositionStyles)[number]>;

/********************************************************************************************************************
 * Size
 * ******************************************************************************************************************/

const CustomComponentSizeBaseStyles = ['width', 'maxWidth', 'minWidth', 'height', 'maxHeight', 'minHeight'] as const;
type CustomComponentSizeBaseStyles = Pick<CSSProperties, (typeof CustomComponentSizeBaseStyles)[number]>;

const CustomComponentSizeCustomStyles = ['fullWidth', 'fullHeight'] as const;
type CustomComponentSizeCustomStyles = {
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export const CustomComponentSizeStyles = [
  ...CustomComponentSizeBaseStyles,
  ...CustomComponentSizeCustomStyles,
] as const;
export type CustomComponentSizeStyles = CustomComponentSizeBaseStyles & CustomComponentSizeCustomStyles;

/********************************************************************************************************************
 * Transform
 * ******************************************************************************************************************/

export const CustomComponentTransformStyles = [
  'transform',
  'transformOrigin',
  'transformStyle',
  'transformBox',
] as const;
export type CustomComponentTransformStyles = Pick<CSSProperties, (typeof CustomComponentTransformStyles)[number]>;

/********************************************************************************************************************
 * Transition
 * ******************************************************************************************************************/

export const CustomComponentTransitionStyles = [
  'transition',
  'transitionBehavior',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
] as const;
export type CustomComponentTransitionStyles = Pick<CSSProperties, (typeof CustomComponentTransitionStyles)[number]>;

/********************************************************************************************************************
 * Overflow
 * ******************************************************************************************************************/

export const CustomComponentOverflowStyles = ['overflow', 'overflowX', 'overflowY', 'textOverflow'] as const;
export type CustomComponentOverflowStyles = Pick<CSSProperties, (typeof CustomComponentOverflowStyles)[number]>;

/********************************************************************************************************************
 * Outline
 * ******************************************************************************************************************/

export const CustomComponentOutlineStyles = [
  'outline',
  'outlineWidth',
  'outlineStyle',
  'outlineColor',
  'outlineOffset',
] as const;
export type CustomComponentOutlineStyles = Pick<CSSProperties, (typeof CustomComponentOutlineStyles)[number]>;

/********************************************************************************************************************
 * Etc
 * ******************************************************************************************************************/

export const CustomComponentEtcStyles = [
  'display',
  'boxShadow',
  'cursor',
  'opacity',
  'visibility',
  'pointerEvents',
  'userSelect',
  'verticalAlign',
  'filter',
] as const;
export type CustomComponentEtcStyles = Pick<CSSProperties, (typeof CustomComponentEtcStyles)[number]>;

/********************************************************************************************************************
 * Custom
 * ******************************************************************************************************************/

export const CustomComponentCustomStyles = ['cssVars'] as const;
export type CustomComponentCustomStyles = {
  cssVars?: Dict<string | undefined>;
};

/********************************************************************************************************************
 * All
 * ******************************************************************************************************************/

export const CustomComponentAllStyles = [
  ...CustomComponentPaddingStyles,
  ...CustomComponentMarginStyles,
  ...CustomComponentBorderStyles,
  ...CustomComponentFlexStyles,
  ...CustomComponentFontStyles,
  ...CustomComponentBackgroundStyles,
  ...CustomComponentPositionStyles,
  ...CustomComponentSizeStyles,
  ...CustomComponentTransformStyles,
  ...CustomComponentTransitionStyles,
  ...CustomComponentOverflowStyles,
  ...CustomComponentOutlineStyles,
  ...CustomComponentEtcStyles,
  ...CustomComponentCustomStyles,
] as const;
export type CustomComponentAllStyles = CustomComponentPaddingStyles &
  CustomComponentMarginStyles &
  CustomComponentBorderStyles &
  CustomComponentFlexStyles &
  CustomComponentFontStyles &
  CustomComponentBackgroundStyles &
  CustomComponentPositionStyles &
  CustomComponentSizeStyles &
  CustomComponentTransformStyles &
  CustomComponentTransitionStyles &
  CustomComponentOverflowStyles &
  CustomComponentOutlineStyles &
  CustomComponentEtcStyles &
  CustomComponentCustomStyles;

export type CustomComponentProps<T> = T &
  CustomComponentAllStyles & {
    component: React.ElementType;
    style?: never;
  };
