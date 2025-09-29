import l from '@loadable/component';
import { loadable } from '@common';

const Dev = l(
  () => import(/* webpackChunkName: "dev-controls" */ './Dev'),
  loadable.options
) as unknown as typeof import('./Dev').default;

export { Dev };

export default Dev;

export * from './Dev.types';
