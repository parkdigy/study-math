import { useContext } from 'react';
import FormControlGroupContext from './FormControlGroupContext';
import { FormControlGroupContextValue } from './FormControlGroupContext.types';

export const useFormControlGroupState = (): FormControlGroupContextValue | undefined => {
  const value = useContext(FormControlGroupContext);
  return empty(value) ? undefined : value;
};

export default useFormControlGroupState;
