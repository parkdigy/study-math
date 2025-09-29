import { createContext } from 'react';
import { RowContextValue } from './RowContext.types';

const RowContext = createContext<RowContextValue>({} as RowContextValue);

export default RowContext;
