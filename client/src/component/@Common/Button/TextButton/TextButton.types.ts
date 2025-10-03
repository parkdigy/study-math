import { BoxButtonProps } from '../BoxButton';

export interface TextButtonProps extends Omit<BoxButtonProps, 'children'> {
  children?: string;
}
