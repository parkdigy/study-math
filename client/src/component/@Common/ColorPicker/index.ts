import l from '@loadable/component';
import { loadable } from '@common';

const ColorPicker = l(
  () => import(/* webpackChunkName: "common-color-picker" */ './ColorPicker'),
  loadable.options
) as unknown as typeof import('./ColorPicker').default;

export { ColorPicker };

export default ColorPicker;

export * from './ColorPicker.types';
