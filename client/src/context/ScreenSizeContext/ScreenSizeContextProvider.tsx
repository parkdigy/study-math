/********************************************************************************************************************
 * 화면 크기 정보를 제공하는 Context 의 Provider
 * ******************************************************************************************************************/

import React from 'react';
import { ScreenSizeContextProviderProps as Props } from './ScreenSizeContextProvider.types';
import ScreenSizeContext from './ScreenSizeContext';
import { useWindowSize } from 'usehooks-ts';
import { ScreenAlias, ScreenAliases, ScreenSizeInfo } from '@theme';

const ScreenSizeContextProvider: React.FC<Props> = ({ children }) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();
  const { width: windowWidth } = useWindowSize();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const lastWindowWidthRef = useRef<number>(undefined);
  const lastInfoRef = useRef<ScreenSizeInfo>({} as ScreenSizeInfo);
  const lastScreenAliasesValueRef = useRef<string>(undefined);

  /********************************************************************************************************************
   * 계산
   * ******************************************************************************************************************/

  const screenSizeInfo = useMemo(() => {
    if (lastWindowWidthRef.current !== windowWidth) {
      lastWindowWidthRef.current = windowWidth;

      const screenAliases = (Object.keys(ScreenAliases) as ScreenAlias[]).filter((screen) => {
        const [min] = ScreenAliases[screen];
        if (theme.screens[min] <= windowWidth) {
          return true;
        }
      });

      const screenAliasesValue = screenAliases!.join(',');
      if (lastScreenAliasesValueRef.current !== screenAliasesValue) {
        lastScreenAliasesValueRef.current = screenAliasesValue;

        const is: Record<ScreenAlias, boolean> = {} as Record<ScreenAlias, boolean>;
        const smallerThan: Record<ScreenAlias, boolean> = {} as Record<ScreenAlias, boolean>;
        const smallerThanOrEqual: Record<ScreenAlias, boolean> = {} as Record<ScreenAlias, boolean>;
        const largerThan: Record<ScreenAlias, boolean> = {} as Record<ScreenAlias, boolean>;
        const largerThanOrEqual: Record<ScreenAlias, boolean> = {} as Record<ScreenAlias, boolean>;

        (Object.keys(ScreenAliases) as ScreenAlias[]).forEach((screen) => {
          is[screen] = screenAliases[screenAliases.length - 1] === screen;
          smallerThan[screen] = !screenAliases.includes(screen);
          smallerThanOrEqual[screen] = !screenAliases.includes(screen) || is[screen];
          largerThan[screen] = screenAliases.includes(screen) && !is[screen];
          largerThanOrEqual[screen] = screenAliases.includes(screen);
        });

        lastInfoRef.current = {
          sizes: screenAliases,
          is,
          smallerThan,
          smallerThanOrEqual,
          largerThan,
          largerThanOrEqual,
        };
      }
    }

    return lastInfoRef.current;
  }, [theme.screens, windowWidth]);

  /********************************************************************************************************************
   * Return
   * ******************************************************************************************************************/

  return <ScreenSizeContext.Provider value={screenSizeInfo}>{children}</ScreenSizeContext.Provider>;
};

export default ScreenSizeContextProvider;
