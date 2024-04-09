import LoadingContext from './LoadingContext';
import { useContext } from 'react';
import { LoadingContextValue } from './LoadingContext.types';

export default function useLoadingState(): LoadingContextValue {
  const value = useContext(LoadingContext);
  if (value === undefined) {
    throw new Error('showLoading should be used within LoadingContext.Provider');
  }
  return value;
}
