import { FormControlCommands, FormControlCommonProps } from '../@common';

export interface FormCheckboxCommands extends FormControlCommands {
  getChecked: () => boolean;
  setChecked: (checked: boolean) => void;
  toggle: () => void;
}

export interface FormCheckboxProps extends Omit<FormControlCommonProps<boolean>, 'value' | 'onChange'> {
  type?: 'checkbox' | 'switch';
  label?: ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
