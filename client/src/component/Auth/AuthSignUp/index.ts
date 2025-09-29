import l from '@loadable/component';
import { loadable } from '@common';

const AuthSignUp = l(() => import(/* webpackChunkName: "auth-sign-up" */ './AuthSignUp'), loadable.options);

export { AuthSignUp };

export default AuthSignUp;

export * from './AuthSignUp.types';
