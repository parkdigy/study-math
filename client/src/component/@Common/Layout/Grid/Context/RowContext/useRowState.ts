import RowContext from './RowContext';
import { RowContextValue } from './RowContext.types';
import { useContext } from 'react';

export function useRowState(): RowContextValue {
  const value = useContext(RowContext);
  if (empty(value)) {
    throw new Error('useRowState should be used within RowContext.Provider');
  }
  return value;
}
