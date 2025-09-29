import l from '@loadable/component';
import { loadable } from '@common';

const ErrorBoundary = l(
  () => import(/* webpackChunkName: "common-error-boundary" */ './ErrorBoundary'),
  loadable.options
) as unknown as typeof import('./ErrorBoundary').default;

export { ErrorBoundary };

export default ErrorBoundary;

export * from './ErrorBoundary.types';
