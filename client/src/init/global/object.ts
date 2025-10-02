function _keys<T extends string>(obj: Record<T, any>): T[] {
  return Object.keys(obj) as T[];
}

/* eslint-disable no-var */
declare global {
  var keys: typeof _keys;
}
/* eslint-enable no-var */

globalThis.keys = _keys;

export {};
