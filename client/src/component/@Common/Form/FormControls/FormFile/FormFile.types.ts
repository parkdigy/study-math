import { FormControlCommands, FormControlCommonProps } from '../@common';
import React from 'react';

export interface FormFileCommands extends FormControlCommands {
  getFile: () => File | undefined;
  clear: () => void;
}

export interface FormFileProps extends Omit<FormControlCommonProps<string>, 'value' | 'onChange' | 'onValidate'> {
  placeholder?: string;
  hideEmptyErrorText?: boolean;
  maxFileSize?: number;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onChange?: (file: File | undefined) => void;
}
