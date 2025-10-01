import l from '@loadable/component';
import { loadable } from '@common';

const Chip = l(
  () => import(/* webpackChunkName: "common-chip" */ './Chip'),
  loadable.options
) as unknown as typeof import('./Chip').default;

export { Chip };

export default Chip;

export * from './Chip.types';
