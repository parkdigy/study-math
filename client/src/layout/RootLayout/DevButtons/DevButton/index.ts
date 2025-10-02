import l from '@loadable/component';
import { loadable } from '@common';

const DevButton = l(
  () => import(/* webpackChunkName: "dev-button" */ './DevButton'),
  loadable.options
) as unknown as typeof import('./DevButton').default;

export { DevButton };

export default DevButton;

export * from './DevButton.types';
