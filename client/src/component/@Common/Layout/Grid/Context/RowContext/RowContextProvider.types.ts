import { RowContextValue } from './RowContext.types';

export interface RowContextProviderProps {
  value: RowContextValue;
  children: ReactNode | null;
}
