import { createContext } from 'react';
import { FormContextValue } from './FormContext.types';

const FormContext = createContext<FormContextValue>({} as any);

export default FormContext;
