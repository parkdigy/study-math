import { createContext } from 'react';
import { GridContextValue } from './GridContext.types';

const GridContext = createContext<GridContextValue>({} as GridContextValue);

export default GridContext;
