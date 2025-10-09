import { FormControlCommands, FormControlCommonProps } from '../@common';

export interface FormCheckboxCommands extends FormControlCommands {
  getChecked: () => boolean;
  setChecked: (checked: boolean) => void;
  toggle: () => void;
}

export interface FormCheckboxProps extends Omit<FormControlCommonProps<boolean>, 'value' | 'onChange'> {
  type?: 'checkbox' | 'switch';
  label?: ReactNode;
  labelColor?: TProps['color'];
  disabled?: boolean;
  checked?: boolean;
  requiredErrorText?: string;
  onChange?: (checked: boolean) => void;
}
