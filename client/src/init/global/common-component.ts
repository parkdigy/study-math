import {
  // Layout
  Box as _Box,
  BoxProps as _BoxProps,
  Stack as _Stack,
  StackProps as _StackProps,
  Span as _Span,
  SpanProps as _SpanProps,
  Flex as _Flex,
  FlexProps as _FlexProps,
  Divider as _Divider,
  DividerProps as _DividerProps,
  Panel as _Panel,
  PanelProps as _PanelProps,
  Grid as _Grid,
  GridProps as _GridProps,
  Row as _Row,
  RowProps as _RowProps,
  Col as _Col,
  ColProps as _ColProps,
  // Image
  Img as _Img,
  ImgProps as _ImgProps,
  Icon as _Icon,
  IconProps as _IconProps,
  // Button
  Button as _Button,
  ButtonProps as _ButtonProps,
  TextButton as _TextButton,
  TextButtonProps as _TextButtonProps,
  IconButton as _IconButton,
  IconButtonProps as _IconButtonProps,
  StackButton as _StackButton,
  StackButtonProps as _StackButtonProps,
  // Dialog
  Dialog as _Dialog,
  DialogProps as _DialogProps,
  DialogCommands as _DialogCommands,
  // Alert
  Alert as _Alert,
  AlertProps as _AlertProps,
  // Tooltip
  Tooltip as _Tooltip,
  TooltipProps as _TooltipProps,
  // Text
  T as _T,
  TProps as _TProps,
  TBold as _TBold,
  T100 as _T100,
  T200 as _T200,
  T300 as _T300,
  T400 as _T400,
  T500 as _T500,
  T600 as _T600,
  T700 as _T700,
  T800 as _T800,
  T900 as _T900,
  TPrimary as _TPrimary,
  TSecondary as _TSecondary,
  TSuccess as _TSuccess,
  TWarning as _TWarning,
  TError as _TError,
  TAccent as _TAccent,
  TBlurry as _TBlurry,
  TLighten as _TLighten,
  TCaption as _TCaption,
  TCaptionBold as _TCaptionBold,
  TCaption100 as _TCaption100,
  TCaption200 as _TCaption200,
  TCaption300 as _TCaption300,
  TCaption400 as _TCaption400,
  TCaption500 as _TCaption500,
  TCaption600 as _TCaption600,
  TCaption700 as _TCaption700,
  TCaption800 as _TCaption800,
  TCaption900 as _TCaption900,
  TBodySmall as _TBodySmall,
  TBodySmallBold as _TBodySmallBold,
  TBodySmall100 as _TBodySmall100,
  TBodySmall200 as _TBodySmall200,
  TBodySmall300 as _TBodySmall300,
  TBodySmall400 as _TBodySmall400,
  TBodySmall500 as _TBodySmall500,
  TBodySmall600 as _TBodySmall600,
  TBodySmall700 as _TBodySmall700,
  TBodySmall800 as _TBodySmall800,
  TBodySmall900 as _TBodySmall900,
  TBody as _TBody,
  TBodyBold as _TBodyBold,
  TBody100 as _TBody100,
  TBody200 as _TBody200,
  TBody300 as _TBody300,
  TBody400 as _TBody400,
  TBody500 as _TBody500,
  TBody600 as _TBody600,
  TBody700 as _TBody700,
  TBody800 as _TBody800,
  TBody900 as _TBody900,
  TBodyLarge as _TBodyLarge,
  TBodyLargeBold as _TBodyLargeBold,
  TBodyLarge100 as _TBodyLarge100,
  TBodyLarge200 as _TBodyLarge200,
  TBodyLarge300 as _TBodyLarge300,
  TBodyLarge400 as _TBodyLarge400,
  TBodyLarge500 as _TBodyLarge500,
  TBodyLarge600 as _TBodyLarge600,
  TBodyLarge700 as _TBodyLarge700,
  TBodyLarge800 as _TBodyLarge800,
  TBodyLarge900 as _TBodyLarge900,
  TTitleSmall as _TTitleSmall,
  TTitleSmallBold as _TTitleSmallBold,
  TTitleSmall100 as _TTitleSmall100,
  TTitleSmall200 as _TTitleSmall200,
  TTitleSmall300 as _TTitleSmall300,
  TTitleSmall400 as _TTitleSmall400,
  TTitleSmall500 as _TTitleSmall500,
  TTitleSmall600 as _TTitleSmall600,
  TTitleSmall700 as _TTitleSmall700,
  TTitleSmall800 as _TTitleSmall800,
  TTitleSmall900 as _TTitleSmall900,
  TTitle as _TTitle,
  TTitleBold as _TTitleBold,
  TTitle100 as _TTitle100,
  TTitle200 as _TTitle200,
  TTitle300 as _TTitle300,
  TTitle400 as _TTitle400,
  TTitle500 as _TTitle500,
  TTitle600 as _TTitle600,
  TTitle700 as _TTitle700,
  TTitle800 as _TTitle800,
  TTitle900 as _TTitle900,
  TTitleLarge as _TTitleLarge,
  TTitleLargeBold as _TTitleLargeBold,
  TTitleLarge100 as _TTitleLarge100,
  TTitleLarge200 as _TTitleLarge200,
  TTitleLarge300 as _TTitleLarge300,
  TTitleLarge400 as _TTitleLarge400,
  TTitleLarge500 as _TTitleLarge500,
  TTitleLarge600 as _TTitleLarge600,
  TTitleLarge700 as _TTitleLarge700,
  TTitleLarge800 as _TTitleLarge800,
  TTitleLarge900 as _TTitleLarge900,
  THeadline as _THeadline,
  THeadlineBold as _THeadlineBold,
  THeadline100 as _THeadline100,
  THeadline200 as _THeadline200,
  THeadline300 as _THeadline300,
  THeadline400 as _THeadline400,
  THeadline500 as _THeadline500,
  THeadline600 as _THeadline600,
  THeadline700 as _THeadline700,
  THeadline800 as _THeadline800,
  THeadline900 as _THeadline900,
  THeadlineLarge as _THeadlineLarge,
  THeadlineLargeBold as _THeadlineLargeBold,
  THeadlineLarge100 as _THeadlineLarge100,
  THeadlineLarge200 as _THeadlineLarge200,
  THeadlineLarge300 as _THeadlineLarge300,
  THeadlineLarge400 as _THeadlineLarge400,
  THeadlineLarge500 as _THeadlineLarge500,
  THeadlineLarge600 as _THeadlineLarge600,
  THeadlineLarge700 as _THeadlineLarge700,
  THeadlineLarge800 as _THeadlineLarge800,
  THeadlineLarge900 as _THeadlineLarge900,
} from '@ccomp';

/* eslint-disable no-var */
declare global {
  // Layout
  var Box: typeof _Box;
  type BoxProps = _BoxProps;
  var Stack: typeof _Stack;
  type StackProps = _StackProps;
  var Span: typeof _Span;
  type SpanProps = _SpanProps;
  var Flex: typeof _Flex;
  type FlexProps = _FlexProps;
  var Divider: typeof _Divider;
  type DividerProps = _DividerProps;
  var Panel: typeof _Panel;
  type PanelProps = _PanelProps;
  var Grid: typeof _Grid;
  type GridProps = _GridProps;
  var Row: typeof _Row;
  type RowProps = _RowProps;
  var Col: typeof _Col;
  type ColProps = _ColProps;
  // Image
  var Img: typeof _Img;
  type ImgProps = _ImgProps;
  var Icon: typeof _Icon;
  type IconProps = _IconProps;
  // Button
  var Button: typeof _Button;
  type ButtonProps = _ButtonProps;
  var TextButton: typeof _TextButton;
  type TextButtonProps = _TextButtonProps;
  var IconButton: typeof _IconButton;
  type IconButtonProps = _IconButtonProps;
  var StackButton: typeof _StackButton;
  type StackButtonProps = _StackButtonProps;
  // Dialog
  var Dialog: typeof _Dialog;
  type DialogProps = _DialogProps;
  type DialogCommands = _DialogCommands;
  // Alert
  var Alert: typeof _Alert;
  type AlertProps = _AlertProps;
  // Tooltip
  var Tooltip: typeof _Tooltip;
  type TooltipProps = _TooltipProps;
  // Text
  var T: typeof _T;
  type TProps = _TProps;
  var TBold: typeof _TBold;
  var T100: typeof _T100;
  var T200: typeof _T200;
  var T300: typeof _T300;
  var T400: typeof _T400;
  var T500: typeof _T500;
  var T600: typeof _T600;
  var T700: typeof _T700;
  var T800: typeof _T800;
  var T900: typeof _T900;
  var TPrimary: typeof _TPrimary;
  var TSecondary: typeof _TSecondary;
  var TSuccess: typeof _TSuccess;
  var TWarning: typeof _TWarning;
  var TError: typeof _TError;
  var TAccent: typeof _TAccent;
  var TBlurry: typeof _TBlurry;
  var TLighten: typeof _TLighten;
  var TCaption: typeof _TCaption;
  var TCaptionBold: typeof _TCaptionBold;
  var TCaption100: typeof _TCaption100;
  var TCaption200: typeof _TCaption200;
  var TCaption300: typeof _TCaption300;
  var TCaption400: typeof _TCaption400;
  var TCaption500: typeof _TCaption500;
  var TCaption600: typeof _TCaption600;
  var TCaption700: typeof _TCaption700;
  var TCaption800: typeof _TCaption800;
  var TCaption900: typeof _TCaption900;
  var TBodySmall: typeof _TBodySmall;
  var TBodySmallBold: typeof _TBodySmallBold;
  var TBodySmall100: typeof _TBodySmall100;
  var TBodySmall200: typeof _TBodySmall200;
  var TBodySmall300: typeof _TBodySmall300;
  var TBodySmall400: typeof _TBodySmall400;
  var TBodySmall500: typeof _TBodySmall500;
  var TBodySmall600: typeof _TBodySmall600;
  var TBodySmall700: typeof _TBodySmall700;
  var TBodySmall800: typeof _TBodySmall800;
  var TBodySmall900: typeof _TBodySmall900;
  var TBody: typeof _TBody;
  var TBodyBold: typeof _TBodyBold;
  var TBody100: typeof _TBody100;
  var TBody200: typeof _TBody200;
  var TBody300: typeof _TBody300;
  var TBody400: typeof _TBody400;
  var TBody500: typeof _TBody500;
  var TBody600: typeof _TBody600;
  var TBody700: typeof _TBody700;
  var TBody800: typeof _TBody800;
  var TBody900: typeof _TBody900;
  var TBodyLarge: typeof _TBodyLarge;
  var TBodyLargeBold: typeof _TBodyLargeBold;
  var TBodyLarge100: typeof _TBodyLarge100;
  var TBodyLarge200: typeof _TBodyLarge200;
  var TBodyLarge300: typeof _TBodyLarge300;
  var TBodyLarge400: typeof _TBodyLarge400;
  var TBodyLarge500: typeof _TBodyLarge500;
  var TBodyLarge600: typeof _TBodyLarge600;
  var TBodyLarge700: typeof _TBodyLarge700;
  var TBodyLarge800: typeof _TBodyLarge800;
  var TBodyLarge900: typeof _TBodyLarge900;
  var TTitleSmall: typeof _TTitleSmall;
  var TTitleSmallBold: typeof _TTitleSmallBold;
  var TTitleSmall100: typeof _TTitleSmall100;
  var TTitleSmall200: typeof _TTitleSmall200;
  var TTitleSmall300: typeof _TTitleSmall300;
  var TTitleSmall400: typeof _TTitleSmall400;
  var TTitleSmall500: typeof _TTitleSmall500;
  var TTitleSmall600: typeof _TTitleSmall600;
  var TTitleSmall700: typeof _TTitleSmall700;
  var TTitleSmall800: typeof _TTitleSmall800;
  var TTitleSmall900: typeof _TTitleSmall900;
  var TTitle: typeof _TTitle;
  var TTitleBold: typeof _TTitleBold;
  var TTitle100: typeof _TTitle100;
  var TTitle200: typeof _TTitle200;
  var TTitle300: typeof _TTitle300;
  var TTitle400: typeof _TTitle400;
  var TTitle500: typeof _TTitle500;
  var TTitle600: typeof _TTitle600;
  var TTitle700: typeof _TTitle700;
  var TTitle800: typeof _TTitle800;
  var TTitle900: typeof _TTitle900;
  var TTitleLarge: typeof _TTitleLarge;
  var TTitleLargeBold: typeof _TTitleLargeBold;
  var TTitleLarge100: typeof _TTitleLarge100;
  var TTitleLarge200: typeof _TTitleLarge200;
  var TTitleLarge300: typeof _TTitleLarge300;
  var TTitleLarge400: typeof _TTitleLarge400;
  var TTitleLarge500: typeof _TTitleLarge500;
  var TTitleLarge600: typeof _TTitleLarge600;
  var TTitleLarge700: typeof _TTitleLarge700;
  var TTitleLarge800: typeof _TTitleLarge800;
  var TTitleLarge900: typeof _TTitleLarge900;
  var THeadline: typeof _THeadline;
  var THeadlineBold: typeof _THeadlineBold;
  var THeadline100: typeof _THeadline100;
  var THeadline200: typeof _THeadline200;
  var THeadline300: typeof _THeadline300;
  var THeadline400: typeof _THeadline400;
  var THeadline500: typeof _THeadline500;
  var THeadline600: typeof _THeadline600;
  var THeadline700: typeof _THeadline700;
  var THeadline800: typeof _THeadline800;
  var THeadline900: typeof _THeadline900;
  var THeadlineLarge: typeof _THeadlineLarge;
  var THeadlineLargeBold: typeof _THeadlineLargeBold;
  var THeadlineLarge100: typeof _THeadlineLarge100;
  var THeadlineLarge200: typeof _THeadlineLarge200;
  var THeadlineLarge300: typeof _THeadlineLarge300;
  var THeadlineLarge400: typeof _THeadlineLarge400;
  var THeadlineLarge500: typeof _THeadlineLarge500;
  var THeadlineLarge600: typeof _THeadlineLarge600;
  var THeadlineLarge700: typeof _THeadlineLarge700;
  var THeadlineLarge800: typeof _THeadlineLarge800;
  var THeadlineLarge900: typeof _THeadlineLarge900;
}
/* eslint-enable no-var */

// Layout
globalThis.Box = _Box;
globalThis.Stack = _Stack;
globalThis.Span = _Span;
globalThis.Flex = _Flex;
globalThis.Divider = _Divider;
globalThis.Panel = _Panel;
globalThis.Grid = _Grid;
globalThis.Row = _Row;
globalThis.Col = _Col;
// Image
globalThis.Img = _Img;
globalThis.Icon = _Icon;
// Button
globalThis.Button = _Button;
globalThis.TextButton = _TextButton;
globalThis.IconButton = _IconButton;
globalThis.StackButton = _StackButton;
// Dialog
globalThis.Dialog = _Dialog;
// Alert
globalThis.Alert = _Alert;
// Tooltip
globalThis.Tooltip = _Tooltip;
// Text
globalThis.T = _T;
globalThis.TBold = _TBold;
globalThis.T100 = _T100;
globalThis.T200 = _T200;
globalThis.T300 = _T300;
globalThis.T400 = _T400;
globalThis.T500 = _T500;
globalThis.T600 = _T600;
globalThis.T700 = _T700;
globalThis.T800 = _T800;
globalThis.T900 = _T900;
globalThis.TPrimary = _TPrimary;
globalThis.TSecondary = _TSecondary;
globalThis.TSuccess = _TSuccess;
globalThis.TWarning = _TWarning;
globalThis.TError = _TError;
globalThis.TAccent = _TAccent;
globalThis.TBlurry = _TBlurry;
globalThis.TLighten = _TLighten;
globalThis.TCaption = _TCaption;
globalThis.TCaptionBold = _TCaptionBold;
globalThis.TCaption100 = _TCaption100;
globalThis.TCaption200 = _TCaption200;
globalThis.TCaption300 = _TCaption300;
globalThis.TCaption400 = _TCaption400;
globalThis.TCaption500 = _TCaption500;
globalThis.TCaption600 = _TCaption600;
globalThis.TCaption700 = _TCaption700;
globalThis.TCaption800 = _TCaption800;
globalThis.TCaption900 = _TCaption900;
globalThis.TBodySmall = _TBodySmall;
globalThis.TBodySmallBold = _TBodySmallBold;
globalThis.TBodySmall100 = _TBodySmall100;
globalThis.TBodySmall200 = _TBodySmall200;
globalThis.TBodySmall300 = _TBodySmall300;
globalThis.TBodySmall400 = _TBodySmall400;
globalThis.TBodySmall500 = _TBodySmall500;
globalThis.TBodySmall600 = _TBodySmall600;
globalThis.TBodySmall700 = _TBodySmall700;
globalThis.TBodySmall800 = _TBodySmall800;
globalThis.TBodySmall900 = _TBodySmall900;
globalThis.TBody = _TBody;
globalThis.TBodyBold = _TBodyBold;
globalThis.TBody100 = _TBody100;
globalThis.TBody200 = _TBody200;
globalThis.TBody300 = _TBody300;
globalThis.TBody400 = _TBody400;
globalThis.TBody500 = _TBody500;
globalThis.TBody600 = _TBody600;
globalThis.TBody700 = _TBody700;
globalThis.TBody800 = _TBody800;
globalThis.TBody900 = _TBody900;
globalThis.TBodyLarge = _TBodyLarge;
globalThis.TBodyLargeBold = _TBodyLargeBold;
globalThis.TBodyLarge100 = _TBodyLarge100;
globalThis.TBodyLarge200 = _TBodyLarge200;
globalThis.TBodyLarge300 = _TBodyLarge300;
globalThis.TBodyLarge400 = _TBodyLarge400;
globalThis.TBodyLarge500 = _TBodyLarge500;
globalThis.TBodyLarge600 = _TBodyLarge600;
globalThis.TBodyLarge700 = _TBodyLarge700;
globalThis.TBodyLarge800 = _TBodyLarge800;
globalThis.TBodyLarge900 = _TBodyLarge900;
globalThis.TTitleSmall = _TTitleSmall;
globalThis.TTitleSmallBold = _TTitleSmallBold;
globalThis.TTitleSmall100 = _TTitleSmall100;
globalThis.TTitleSmall200 = _TTitleSmall200;
globalThis.TTitleSmall300 = _TTitleSmall300;
globalThis.TTitleSmall400 = _TTitleSmall400;
globalThis.TTitleSmall500 = _TTitleSmall500;
globalThis.TTitleSmall600 = _TTitleSmall600;
globalThis.TTitleSmall700 = _TTitleSmall700;
globalThis.TTitleSmall800 = _TTitleSmall800;
globalThis.TTitleSmall900 = _TTitleSmall900;
globalThis.TTitle = _TTitle;
globalThis.TTitleBold = _TTitleBold;
globalThis.TTitle100 = _TTitle100;
globalThis.TTitle200 = _TTitle200;
globalThis.TTitle300 = _TTitle300;
globalThis.TTitle400 = _TTitle400;
globalThis.TTitle500 = _TTitle500;
globalThis.TTitle600 = _TTitle600;
globalThis.TTitle700 = _TTitle700;
globalThis.TTitle800 = _TTitle800;
globalThis.TTitle900 = _TTitle900;
globalThis.TTitleLarge = _TTitleLarge;
globalThis.TTitleLargeBold = _TTitleLargeBold;
globalThis.TTitleLarge100 = _TTitleLarge100;
globalThis.TTitleLarge200 = _TTitleLarge200;
globalThis.TTitleLarge300 = _TTitleLarge300;
globalThis.TTitleLarge400 = _TTitleLarge400;
globalThis.TTitleLarge500 = _TTitleLarge500;
globalThis.TTitleLarge600 = _TTitleLarge600;
globalThis.TTitleLarge700 = _TTitleLarge700;
globalThis.TTitleLarge800 = _TTitleLarge800;
globalThis.TTitleLarge900 = _TTitleLarge900;
globalThis.THeadline = _THeadline;
globalThis.THeadlineBold = _THeadlineBold;
globalThis.THeadline100 = _THeadline100;
globalThis.THeadline200 = _THeadline200;
globalThis.THeadline300 = _THeadline300;
globalThis.THeadline400 = _THeadline400;
globalThis.THeadline500 = _THeadline500;
globalThis.THeadline600 = _THeadline600;
globalThis.THeadline700 = _THeadline700;
globalThis.THeadline800 = _THeadline800;
globalThis.THeadline900 = _THeadline900;
globalThis.THeadlineLarge = _THeadlineLarge;
globalThis.THeadlineLargeBold = _THeadlineLargeBold;
globalThis.THeadlineLarge100 = _THeadlineLarge100;
globalThis.THeadlineLarge200 = _THeadlineLarge200;
globalThis.THeadlineLarge300 = _THeadlineLarge300;
globalThis.THeadlineLarge400 = _THeadlineLarge400;
globalThis.THeadlineLarge500 = _THeadlineLarge500;
globalThis.THeadlineLarge600 = _THeadlineLarge600;
globalThis.THeadlineLarge700 = _THeadlineLarge700;
globalThis.THeadlineLarge800 = _THeadlineLarge800;
globalThis.THeadlineLarge900 = _THeadlineLarge900;
