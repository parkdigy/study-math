import l from '@loadable/component';
import { loadable } from '@common';

const BoxButton = l(
  () => import(/* webpackChunkName: "common-stack-button" */ './BoxButton'),
  loadable.options
) as unknown as typeof import('./BoxButton').default;

export { BoxButton };

export default BoxButton;

export * from './BoxButton.types';
