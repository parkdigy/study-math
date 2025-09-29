import l from '@loadable/component';
import { loadable } from '@common';

const PageRootContainer = l(
  () => import(/* webpackChunkName: "common-page-root-container" */ './PageRootContainer'),
  loadable.options
) as unknown as typeof import('./PageRootContainer').default;

export { PageRootContainer };

export default PageRootContainer;

export * from './PageRootContainer.types';
