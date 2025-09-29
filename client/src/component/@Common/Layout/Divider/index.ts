import l from '@loadable/component';
import { loadable } from '@common';

const Divider = l(
  () => import(/* webpackChunkName: "common-divider" */ './Divider'),
  loadable.options
) as unknown as typeof import('./Divider').default;

export { Divider };

export default Divider;

export * from './Divider.types';
