import l from '@loadable/component';
import { loadable } from '@common';

const ListItem = l(
  () => import(/* webpackChunkName: "common-list-item" */ './ListItem'),
  loadable.options
) as unknown as typeof import('./ListItem').default;

export { ListItem };

export default ListItem;

export * from './ListItem.types';
