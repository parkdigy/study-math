import l from '@loadable/component';
import { loadable } from '@common';

const Form = l(
  () => import(/* webpackChunkName: "common-form" */ './Form'),
  loadable.options
) as unknown as typeof import('./Form').default;

export { Form };

export default Form;

export * from './Form.types';
