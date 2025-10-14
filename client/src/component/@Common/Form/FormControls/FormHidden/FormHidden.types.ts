import { FormControlCommands, FormControlCommonProps } from '../@common';

export interface FormHiddenCommands extends FormControlCommands {
  getValue: () => string | undefined;
  setValue: (value: string | undefined) => void;
}

export interface FormHiddenProps extends FormControlCommonProps<string> {
  requiredErrorText?: string;
}
