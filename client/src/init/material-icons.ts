import { config } from '@common';

/** 개발 환경에서는 사용할 아이콘 */
const _DevMaterialIconTypes = ['filled', 'outlined', 'round', 'sharp'] as const;
type _DevMaterialIconTypes = (typeof _DevMaterialIconTypes)[number];

/** 라이브 환경에서는 사용할 아이콘 */
const _LiveMaterialIconTypes = [
  // 'filled',
  // 'outlined',
  'round',
  // 'sharp'
] as const;
type _LiveMaterialIconTypes = (typeof _LiveMaterialIconTypes)[number];

/** 사용 아이콘 */
const _MaterialIconTypes = config.env === 'local' ? _DevMaterialIconTypes : _LiveMaterialIconTypes;
type _MaterialIconTypes = (typeof _MaterialIconTypes)[number];

/* eslint-disable no-var */
declare global {
  var MaterialIconTypes: typeof _MaterialIconTypes;
  type MaterialIconTypes = _MaterialIconTypes;
  var DevMaterialIconTypes: typeof _DevMaterialIconTypes;
  type DevMaterialIconTypes = _DevMaterialIconTypes;
  var LiveMaterialIconTypes: typeof _LiveMaterialIconTypes;
  type LiveMaterialIconTypes = _LiveMaterialIconTypes;
}
/* eslint-enable no-var */

globalThis.MaterialIconTypes = _MaterialIconTypes;
globalThis.DevMaterialIconTypes = _DevMaterialIconTypes;
globalThis.LiveMaterialIconTypes = _LiveMaterialIconTypes;

/********************************************************************************************************************
 * 아이콘 로드
 * ******************************************************************************************************************/

const loadIconStyle = async (types: readonly string[]) => {
  for (const type of types) {
    switch (type) {
      case 'filled':
        await import('material-icons/iconfont/filled.css');
        break;
      case 'outlined':
        await import('material-icons/iconfont/outlined.css');
        break;
      case 'round':
        await import('material-icons/iconfont/round.css');
        break;
      case 'sharp':
        await import('material-icons/iconfont/sharp.css');
        break;
    }
  }
};

loadIconStyle(MaterialIconTypes);

export {};
