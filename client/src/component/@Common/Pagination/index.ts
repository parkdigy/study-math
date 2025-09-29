import l from '@loadable/component';
import { loadable } from '@common';

const Pagination = l(
  () => import(/* webpackChunkName: "common-pagination" */ './Pagination'),
  loadable.options
) as unknown as typeof import('./Pagination').default;

export { Pagination };

export default Pagination;

export * from './Pagination.types';
