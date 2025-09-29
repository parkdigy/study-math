import l from '@loadable/component';
import { loadable } from '@common';

const Loading = l(
  () => import(/* webpackChunkName: "common-loading" */ './Loading'),
  loadable.options
) as unknown as typeof import('./Loading').default;

export { Loading };

export default Loading;

export * from './Loading.types';
