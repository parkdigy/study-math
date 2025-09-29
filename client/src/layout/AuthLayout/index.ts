import l from '@loadable/component';
import { loadable } from '@common';

const AuthLayout = l(
  () => import(/* webpackChunkName: "auth-layout" */ './AuthLayout'),
  loadable.options
) as unknown as typeof import('./AuthLayout').default;

export { AuthLayout };

export default AuthLayout;
