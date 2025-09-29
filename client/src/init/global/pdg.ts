import type {
  ValueOf as _ValueOf,
  Dict as _Dict,
  Arr as _Arr,
  IsObject as _IsObject,
  IsArray as _IsArray,
  ObjectMerge as _ObjectMerge,
  ArrayMerge as _ArrayMerge,
  PartialPick as _PartialPick,
  PartialOmit as _PartialOmit,
  RequiredPick as _RequiredPick,
  RequiredOmit as _RequiredOmit,
  Lv as _Lv,
  Vl as _Vl,
} from '@pdg/types';
import {
  // empty
  empty as _empty,
  notEmpty as _notEmpty,
  ifEmpty as _ifEmpty,
  ifNotEmpty as _ifNotEmpty,
  isEmpty as _isEmpty,
  isNotEmpty as _isNotEmpty,
  // null
  ifNull as _ifNull,
  ifNotNull as _ifNotNull,
  isNull as _isNull,
  isNotNull as _isNotNull,
  // undefined
  ifUndefined as _ifUndefined,
  ifNotUndefined as _ifNotUndefined,
  isUndefined as _isUndefined,
  isNotUndefined as _isNotUndefined,
  // null, undefined
  ifNullOrUndefined as _ifNullOrUndefined,
  ifNotNullAndUndefined as _ifNotNullAndUndefined,
  isNullOrUndefined as _isNullOrUndefined,
  isNotNullAndUndefined as _isNotNullAndUndefined,
  // etc
  equal as _equal,
  contains as _contains,
} from '@pdg/compare';
import { now as _now, nowJs as _nowJs, nowTime as _nowTime } from '@pdg/date-time';
import { lv as _lv, vl as _vl, copy as _copy } from '@pdg/data';

/* eslint-disable no-var */
declare global {
  // types
  type ValueOf<T> = _ValueOf<T>;
  type Dict<T = unknown> = _Dict<T>;
  type Arr<T = unknown> = _Arr<T>;
  type IsObject<T> = _IsObject<T>;
  type IsArray<T> = _IsArray<T>;
  type ObjectMerge<T> = _ObjectMerge<T>;
  type ArrayMerge<A extends any[]> = _ArrayMerge<A>;
  type PartialPick<T, K extends keyof T> = _PartialPick<T, K>;
  type PartialOmit<T, K extends keyof T> = _PartialOmit<T, K>;
  type RequiredPick<T, K extends keyof T> = _RequiredPick<T, K>;
  type RequiredOmit<T, K extends keyof T> = _RequiredOmit<T, K>;
  type Lv<
    L = any,
    V = any,
    Other = {
      [key: string]: any;
    },
  > = _Lv<L, V, Other>;
  type Vl<
    L = any,
    V = any,
    Other = {
      [key: string]: any;
    },
  > = _Vl<V, L, Other>;

  // empty
  var empty: typeof _empty;
  var notEmpty: typeof _notEmpty;
  var ifEmpty: typeof _ifEmpty;
  var ifNotEmpty: typeof _ifNotEmpty;
  var isEmpty: typeof _isEmpty;
  var isNotEmpty: typeof _isNotEmpty;

  // null
  var ifNull: typeof _ifNull;
  var ifNotNull: typeof _ifNotNull;
  var isNull: typeof _isNull;
  var isNotNull: typeof _isNotNull;

  // undefined
  var ifUndefined: typeof _ifUndefined;
  var ifNotUndefined: typeof _ifNotUndefined;
  var isUndefined: typeof _isUndefined;
  var isNotUndefined: typeof _isNotUndefined;

  // null, undefined
  var ifNullOrUndefined: typeof _ifNullOrUndefined;
  var ifNotNullAndUndefined: typeof _ifNotNullAndUndefined;
  var isNullOrUndefined: typeof _isNullOrUndefined;
  var isNotNullAndUndefined: typeof _isNotNullAndUndefined;

  // etc
  var equal: typeof _equal;
  var contains: typeof _contains;

  // date
  var now: typeof _now;
  var nowJs: typeof _nowJs;
  var nowTime: typeof _nowTime;

  // data
  var lv: typeof _lv;
  var vl: typeof _vl;
  var copy: typeof _copy;

  // delay
  var nextTick: (callback: () => void, delay?: number) => NodeJS.Timeout;
}
/* eslint-enable no-var */

// empty
globalThis.empty = _empty;
globalThis.notEmpty = _notEmpty;
globalThis.ifEmpty = _ifEmpty;
globalThis.ifNotEmpty = _ifNotEmpty;
globalThis.isEmpty = _isEmpty;
globalThis.isNotEmpty = _isNotEmpty;

// null
globalThis.ifNull = _ifNull;
globalThis.ifNotNull = _ifNotNull;
globalThis.isNull = _isNull;
globalThis.isNotNull = _isNotNull;

// undefined
globalThis.ifUndefined = _ifUndefined;
globalThis.ifNotUndefined = _ifNotUndefined;
globalThis.isUndefined = _isUndefined;
globalThis.isNotUndefined = _isNotUndefined;

// null, undefined
globalThis.ifNullOrUndefined = _ifNullOrUndefined;
globalThis.ifNotNullAndUndefined = _ifNotNullAndUndefined;
globalThis.isNullOrUndefined = _isNullOrUndefined;
globalThis.isNotNullAndUndefined = _isNotNullAndUndefined;

// etc
globalThis.equal = _equal;
globalThis.contains = _contains;

// date
globalThis.now = _now;
globalThis.nowJs = _nowJs;
globalThis.nowTime = _nowTime;

// data
globalThis.lv = _lv;
globalThis.vl = _vl;
globalThis.copy = _copy;

// delay
globalThis.nextTick = (callback: () => void, delay?: number): NodeJS.Timeout => {
  return setTimeout(callback, delay === undefined ? 1 : delay);
};

export {};
