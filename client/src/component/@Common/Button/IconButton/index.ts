import l from '@loadable/component';
import { loadable } from '@common';

const IconButton = l(
  () => import(/* webpackChunkName: "common-icon-button" */ './IconButton'),
  loadable.options
) as unknown as typeof import('./IconButton').default;

export { IconButton };

export default IconButton;

export * from './IconButton.types';
