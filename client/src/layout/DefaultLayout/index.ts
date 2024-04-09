import l from '@loadable/component';
import { loadable } from '@common';

const DefaultLayout = l(() => import('./DefaultLayout'), loadable.options);

export { DefaultLayout };

export default DefaultLayout;
