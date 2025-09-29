import l from '@loadable/component';
import { loadable } from '@common';

const TextButton = l(
  () => import(/* webpackChunkName: "common-text-button" */ './TextButton'),
  loadable.options
) as unknown as typeof import('./TextButton').default;

export { TextButton };

export default TextButton;

export * from './TextButton.types';
