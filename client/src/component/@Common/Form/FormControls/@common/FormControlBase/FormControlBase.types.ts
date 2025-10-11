import { FormControlType } from '../../../FormContext';
import { BoxStyleProps } from '../../../../Layout';

export interface FormControlCommands {
  focus: () => void;
  validate: () => boolean;
  setError: (error: string | boolean) => void;
}

export interface FormControlCommonProps<T> extends Omit<BoxStyleProps, 's' | 'size'> {
  className?: string;
  name: string;
  title?: string;
  titleProps?: Omit<TProps, 'children'>;
  titleWidth?: number;
  hideTitle?: boolean;
  required?: boolean;
  disabled?: boolean;
  helperText?: ReactNode;
  error?: string | boolean;
  hideError?: boolean;
  subControl?: ReactNode;
  spacing?: number;
  value?: T;
  onChange?: (value: T) => void;
  onValidate?: (value: T) => string | boolean;
  onErrorChange?: (error: string | boolean) => void;
}

export interface FormControlBaseProps
  extends Omit<FormControlCommonProps<any>, 'value' | 'onChange' | 'onValidate' | 'onErrorChange'> {
  type: FormControlType;
  commands: FormControlCommands | null;
  children: ReactNode;
  controlHelperText?: ReactNode;
  focused?: boolean;
}
