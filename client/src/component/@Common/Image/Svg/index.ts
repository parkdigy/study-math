import l from '@loadable/component';
import { loadable } from '@common';

const Svg = l(
  () => import(/* webpackChunkName: "common-svg" */ './Svg'),
  loadable.options
) as unknown as typeof import('./Svg').default;

export { Svg };

export default Svg;

export * from './Svg.types';
