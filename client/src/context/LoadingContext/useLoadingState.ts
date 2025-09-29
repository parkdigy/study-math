import LoadingContext from './LoadingContext';
import { useContext } from 'react';
import { LoadingContextValue } from './LoadingContext.types';

export default function useLoadingState(): LoadingContextValue {
  const value = useContext(LoadingContext);
  if (empty(value)) {
    return { showLoading() {}, hideLoading() {} };
  }
  return value;
}
