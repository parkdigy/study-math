import l from '@loadable/component';
import { loadable } from '@common';

const Icon = l(
  () => import(/* webpackChunkName: "common-icon" */ './Icon'),
  loadable.options
) as unknown as typeof import('./Icon').default;

export { Icon };

export default Icon;

export * from './Icon.types';
