import l from '@loadable/component';
import { loadable } from '@common';

const FormTitle = l(
  () => import(/* webpackChunkName: "common-form-title" */ './FormTitle'),
  loadable.options
) as unknown as typeof import('./FormTitle').default;

export { FormTitle };

export default FormTitle;

export * from './FormTitle.types';
