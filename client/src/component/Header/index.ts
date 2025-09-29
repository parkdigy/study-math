import l from '@loadable/component';
import { loadable } from '@common';

const Header = l(
  () => import(/* webpackChunkName: "header" */ './Header'),
  loadable.options
) as unknown as typeof import('./Header').default;

export { Header };

export default Header;

export * from './Header.types';
