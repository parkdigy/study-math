import React from 'react';
import { RowContextProviderProps as Props } from './RowContextProvider.types';
import RowContext from './RowContext';

export const RowContextProvider: React.FC<Props> = ({ children, value }) => {
  return <RowContext.Provider value={value}>{children}</RowContext.Provider>;
};

export default RowContextProvider;
