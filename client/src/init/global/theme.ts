import { useTheme as _useTheme } from '@theme';

/* eslint-disable no-var */
declare global {
  var useTheme: typeof _useTheme;
}
/* eslint-enable no-var */

globalThis.useTheme = _useTheme;
