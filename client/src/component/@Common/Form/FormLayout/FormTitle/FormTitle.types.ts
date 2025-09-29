export interface FormTitleProps {
  children?: ReactNode;
  className?: string;
  height?: number;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  labelProps?: Omit<TProps, 'children'>;
}
