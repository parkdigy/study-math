import { FormTextCommands, FormTextProps } from '../FormText';

export interface FormPasswordCommands extends FormTextCommands {}

export interface FormPasswordProps
  extends Omit<FormTextProps, 'ref' | 'type' | 'clear' | 'autoComplete' | 'onCommands'> {
  rules?: boolean;
  linkName?: string;
}
