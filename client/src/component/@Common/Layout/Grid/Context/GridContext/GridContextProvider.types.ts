import { GridContextValue } from './GridContext.types';

export interface GridContextProviderProps {
  value: GridContextValue;
  children: ReactNode | null;
}
