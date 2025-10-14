import { FormControlCommands } from '../../FormControls/@common';

export type FormControlType =
  | 'text'
  | 'email'
  | 'url'
  | 'password'
  | 'textarea'
  | 'checkbox'
  | 'radio_group'
  | 'select'
  | 'hidden';

export interface FormContextValue {
  titlePosition: 'top' | 'left';
  titleWidth: number;
  hideTitle: boolean;
  disabled: boolean;
  addControl: (type: FormControlType, name: string, commands: FormControlCommands | null) => void;
  removeControl: (name: string) => void;
  getControlCommands: <T extends FormControlCommands>(name: string) => T | undefined;
}
