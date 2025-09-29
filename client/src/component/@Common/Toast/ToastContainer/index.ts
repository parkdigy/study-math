import l from '@loadable/component';
import { loadable } from '@common';

const ToastContainer = l(
  () => import(/* webpackChunkName: "common-toast-container" */ './ToastContainer'),
  loadable.options
) as unknown as typeof import('./ToastContainer').default;

export { ToastContainer };

export default ToastContainer;

export * from './ToastContainer.types';
