import l from '@loadable/component';
import { loadable } from '@common';

const StackButton = l(
  () => import(/* webpackChunkName: "common-stack-button" */ './StackButton'),
  loadable.options
) as unknown as typeof import('./StackButton').default;

export { StackButton };

export default StackButton;

export * from './StackButton.types';
