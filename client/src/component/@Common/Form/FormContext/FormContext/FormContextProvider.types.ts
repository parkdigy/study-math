import { FormContextValue } from './FormContext.types';

export interface FormContextProviderProps {
  value: FormContextValue;
  children: ReactNode | null;
}
