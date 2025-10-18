import l from '@loadable/component';
import { loadable } from '@common';

const Img = l(
  () => import(/* webpackChunkName: "common-img" */ './Img'),
  loadable.options
) as unknown as typeof import('./Img').default;

export { Img };

export default Img;

export * from './Img.types';
