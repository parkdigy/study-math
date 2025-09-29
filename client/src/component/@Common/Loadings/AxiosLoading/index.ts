import l from '@loadable/component';
import { loadable } from '@common';

const AxiosLoading = l(
  () => import(/* webpackChunkName: "common-axios-loading" */ './AxiosLoading'),
  loadable.options
) as unknown as typeof import('./AxiosLoading').default;

export { AxiosLoading };

export default AxiosLoading;
