import l from '@loadable/component';
import { loadable } from '@common';

const Loading = l(() => import('./Loading'), loadable.options);

export { Loading };

export default Loading;

export * from './Loading.types';
