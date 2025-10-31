/* eslint-disable no-var */
declare global {
  var env: 'local' | 'development' | 'staging' | 'production';
}
/* eslint-enable no-var */

globalThis.env = (window as any).$$MyAppConfig.env;

export {};
