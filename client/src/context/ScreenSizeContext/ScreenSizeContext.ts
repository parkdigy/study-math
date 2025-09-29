/********************************************************************************************************************
 * 화면 크기 정보를 제공하는 Context
 * ******************************************************************************************************************/

import { createContext } from 'react';
import { ScreenSizeInfo } from '@theme';

const ScreenSizeContext = createContext<ScreenSizeInfo>({} as ScreenSizeInfo);

export default ScreenSizeContext;
