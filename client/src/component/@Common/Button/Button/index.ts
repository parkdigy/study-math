import l from '@loadable/component';
import { loadable } from '@common';

const Button = l(
  () => import(/* webpackChunkName: "common-button" */ './Button'),
  loadable.options
) as unknown as typeof import('./Button').default;

export { Button };

export default Button;

export * from './Button.types';
