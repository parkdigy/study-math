import ScreenSizeContext from './ScreenSizeContext';
import { useContext } from 'react';
import { ScreenSizeInfo } from '@theme';

export default function useScreenSize(): ScreenSizeInfo {
  const value = useContext(ScreenSizeContext);
  if (empty(value)) {
    throw new Error('useScreenSize should be used within ScreenSizeContextProvider.');
  }
  return value;
}
