/********************************************************************************************************************
 * Loading Context
 * ******************************************************************************************************************/

import { createContext } from 'react';
import { LoadingContextDefaultValue, LoadingContextValue } from './LoadingContext.types';

const LoadingContext = createContext<LoadingContextValue>(LoadingContextDefaultValue);

export default LoadingContext;
