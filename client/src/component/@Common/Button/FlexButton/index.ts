import l from '@loadable/component';
import { loadable } from '@common';

const FlexButton = l(
  () => import(/* webpackChunkName: "common-stack-button" */ './FlexButton'),
  loadable.options
) as unknown as typeof import('./FlexButton').default;

export { FlexButton };

export default FlexButton;

export * from './FlexButton.types';
