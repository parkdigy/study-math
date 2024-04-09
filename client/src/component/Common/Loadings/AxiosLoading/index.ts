import l from '@loadable/component';
import { loadable } from '@common';

const AxiosLoading = l(() => import('./AxiosLoading'), loadable.options);

export { AxiosLoading };

export default AxiosLoading;
