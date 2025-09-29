import l from '@loadable/component';
import { loadable } from '@common';

const Logo = l(
  () => import(/* webpackChunkName: "common-logo" */ './Logo'),
  loadable.options
) as unknown as typeof import('./Logo').default;

export { Logo };

export default Logo;

export * from './Logo.types';
