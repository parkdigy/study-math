/********************************************************************************************************************
 * Loading Context
 * ******************************************************************************************************************/

import { createContext } from 'react';
import { LoadingContextValue } from './LoadingContext.types';

const LoadingContext = createContext<LoadingContextValue>({} as LoadingContextValue);

export default LoadingContext;
