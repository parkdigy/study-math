import { FormControlCommands, FormControlCommonProps } from '../../@common';
import { HTMLProps } from 'react';

export interface FormTextareaCommands extends FormControlCommands {
  getValue: () => string;
  setValue: (value: string) => void;
  clear: () => void;
}

export interface FormTextareaProps
  extends FormControlCommonProps<string>,
    Pick<HTMLProps<HTMLTextAreaElement>, 'maxLength' | 'rows' | 'onFocus' | 'onBlur' | 'onKeyUp' | 'onKeyDown'> {
  placeholder?: string;
  hideEmptyErrorText?: boolean;
  onFinalValue?: (value: string) => string;
}
