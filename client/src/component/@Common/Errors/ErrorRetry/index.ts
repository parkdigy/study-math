import l from '@loadable/component';
import { loadable } from '@common';

const ErrorRetry = l(
  () => import(/* webpackChunkName: "common-error-retry" */ './ErrorRetry'),
  loadable.options
) as unknown as typeof import('./ErrorRetry').default;

export { ErrorRetry };

export default ErrorRetry;

export * from './ErrorRetry.types';
