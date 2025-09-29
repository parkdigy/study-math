import { FormControlCommands, FormControlCommonProps } from '../../@common';
import { FormControlType } from '../../../FormContext';
import { FormInputProps } from './sub';

export interface FormTextCommands extends FormControlCommands {
  getValue: () => string;
  setValue: (value: string) => void;
  clear: () => void;
}

export interface FormTextProps
  extends FormControlCommonProps<string>,
    Pick<
      FormInputProps,
      'type' | 'clear' | 'endAdornment' | 'maxLength' | 'onFocus' | 'onBlur' | 'onKeyUp' | 'onKeyDown'
    > {
  $custom?: boolean;
  $type?: FormControlType;
  $commands?: FormControlCommands | null;
  placeholder?: string;
  hideEmptyErrorText?: boolean;
  preventKeys?: RegExp;
  onCommands?: (commands: FormTextCommands) => void;
  onFinalValue?: (value: string) => string;
}
