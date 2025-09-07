import {
  Box as _Box,
  BoxProps as _BoxProps,
  Stack as _Stack,
  StackProps as _StackProps,
  Div as _Div,
  DivProps as _DivProps,
  Span as _Span,
  SpanProps as _SpanProps,
  Flex as _Flex,
  FlexProps as _FlexProps,
  Img as _Img,
  ImgProps as _ImgProps,
  T as _T,
  TProps as _TProps,
} from '@ccomp';

/* eslint-disable no-var */
declare global {
  var Box: typeof _Box;
  type BoxProps = _BoxProps;
  var Stack: typeof _Stack;
  type StackProps = _StackProps;
  var Div: typeof _Div;
  type DivProps = _DivProps;
  var Span: typeof _Span;
  type SpanProps = _SpanProps;
  var Flex: typeof _Flex;
  type FlexProps = _FlexProps;
  var Img: typeof _Img;
  type ImgProps = _ImgProps;
  var T: typeof _T;
  type TProps = _TProps;
}
/* eslint-enable no-var */

globalThis.Box = _Box;
globalThis.Stack = _Stack;
globalThis.Div = _Div;
globalThis.Span = _Span;
globalThis.Flex = _Flex;
globalThis.Img = _Img;
globalThis.T = _T;
