import l from '@loadable/component';
import { loadable } from '@common';

const Alert = l(
  () => import(/* webpackChunkName: "common-alert" */ './Alert'),
  loadable.options
) as unknown as typeof import('./Alert').default;

export { Alert };

export default Alert;

export * from './Alert.types';
