export interface FormControlGroupProps {
  children?: ReactNode;
  title?: string;
  required?: boolean;
  helperText?: ReactNode;
  error?: string | boolean;
  defaultErrorMessage?: string;
  showControlError?: boolean;
}
