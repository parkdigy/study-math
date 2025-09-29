import { FormTextCommands, FormTextProps } from '../FormText';

export interface FormUrlCommands extends FormTextCommands {}

export interface FormUrlProps extends Omit<FormTextProps, 'ref' | 'type' | 'clear' | 'onCommands'> {}
