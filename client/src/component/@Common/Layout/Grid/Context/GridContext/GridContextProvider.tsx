import React from 'react';
import { GridContextProviderProps as Props } from './GridContextProvider.types';
import GridContext from './GridContext';

export const GridContextProvider: React.FC<Props> = ({ children, value }) => {
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export default GridContextProvider;
