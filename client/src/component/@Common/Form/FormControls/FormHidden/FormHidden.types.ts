import { FormControlCommands, FormControlCommonProps } from '../@common';

export interface FormHiddenCommands extends Omit<FormControlCommands, 'setError' | 'validate'> {
  getValue: () => string | undefined;
  setValue: (value: string | undefined) => void;
}

export interface FormHiddenProps
  extends Pick<FormControlCommonProps<string>, 'className' | 'name' | 'value' | 'onChange' | 'disabled'> {}
