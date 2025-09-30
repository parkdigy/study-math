import l from '@loadable/component';
import { loadable } from '@common';

const List = l(
  () => import(/* webpackChunkName: "common-list" */ './List'),
  loadable.options
) as unknown as typeof import('./List').default;

export { List };

export default List;

export * from './List.types';
