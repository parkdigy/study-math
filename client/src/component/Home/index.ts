import l from '@loadable/component';
import { loadable } from '@common';

const Home = l(() => import('./Home'), loadable.options);

export { Home };
