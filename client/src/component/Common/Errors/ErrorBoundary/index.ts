import l from '@loadable/component';
import { loadable } from '@common';

const ErrorBoundary = l(() => import('./ErrorBoundary'), loadable.options);

export { ErrorBoundary };

export default ErrorBoundary;

export * from './ErrorBoundary.types';
