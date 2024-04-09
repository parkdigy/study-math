import l from '@loadable/component';
import { loadable } from '@common';

const ErrorRetry = l(() => import('./ErrorRetry'), loadable.options);

export { ErrorRetry };

export default ErrorRetry;

export * from './ErrorRetry.types';
