import { HTMLProps } from 'react';
import { FormControlCommands } from '../FormControls/@common';

export interface FormCommands {
  getControlCommands: <T extends FormControlCommands>(name: string) => T | undefined;
}

export interface FormProps extends Omit<HTMLProps<HTMLFormElement>, 'ref' | 'noValidate' | 'onSubmit'> {
  titlePosition?: 'top' | 'left';
  titleWidth?: number;
  hideTitle?: boolean;
  onSubmit?: (values: Dict<string | number | boolean | undefined>) => void;
}
