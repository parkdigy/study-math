import l from '@loadable/component';
import { loadable } from '@common';

const ContentContainer = l(
  () => import(/* webpackChunkName: "common-content-container" */ './ContentContainer'),
  loadable.options
) as unknown as typeof import('./ContentContainer').default;

export { ContentContainer };

export default ContentContainer;

export * from './ContentContainer.types';
