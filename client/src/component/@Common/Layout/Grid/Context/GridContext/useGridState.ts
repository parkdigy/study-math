import GridContext from './GridContext';
import { GridContextValue } from './GridContext.types';
import { useContext } from 'react';

export function useGridState(): GridContextValue {
  const value = useContext(GridContext);
  if (empty(value)) {
    throw new Error('useGridState should be used within GridContext.Provider');
  }
  return value;
}
