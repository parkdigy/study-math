import AppContext from './AppContext';
import { AppContextValue } from './AppContext.types';
import { useContext } from 'react';

export default function useAppState(): AppContextValue {
  const value = useContext(AppContext);
  if (empty(value)) {
    throw new Error('useAppState should be used within AppContextProvider');
  }
  return value;
}
