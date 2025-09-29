import FormContext from './FormContext';
import { FormContextValue } from './FormContext.types';
import { useContext } from 'react';

export const useFormState = (): FormContextValue => {
  const value = useContext(FormContext);
  if (empty(value)) {
    throw new Error('useFormState should be used within FormContext.Provider');
  }
  return value;
};

export default useFormState;
