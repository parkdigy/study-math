import l from '@loadable/component';
import { loadable } from '@common';

const Dialog = l(
  () => import(/* webpackChunkName: "common-dialog" */ './Dialog'),
  loadable.options
) as unknown as typeof import('./Dialog').default;

export { Dialog };

export default Dialog;

export * from './Dialog.types';
