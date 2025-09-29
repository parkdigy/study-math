import React from 'react';
import { FormControlGroupContextProviderProps as Props } from './FormControlGroupContextProvider.types';
import FormControlGroupContext from './FormControlGroupContext';

const FormControlGroupContextProvider: React.FC<Props> = ({ children, value }) => {
  return <FormControlGroupContext.Provider value={value}>{children}</FormControlGroupContext.Provider>;
};

export default FormControlGroupContextProvider;
