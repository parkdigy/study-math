/********************************************************************************************************************
 * 화면 크기 정보를 제공하는 Context 의 Provider
 * ******************************************************************************************************************/

import React from 'react';
import { ScreenSizeContextProviderProps as Props } from './ScreenSizeContextProvider.types';
import ScreenSizeContext from './ScreenSizeContext';
import { useWindowSize } from 'usehooks-ts';
import {
  AllScreenAliases,
  ScreenSizeInfo,
  ScreenSizeInfoIsKey,
  ScreenSizeInfoLargerThanKey,
  ScreenSizeInfoLargerThanOrEqualKey,
  ScreenSizeInfoSmallerThanKey,
  ScreenSizeInfoSmallerThanOrEqualKey,
} from '@theme';

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

      const screenAliases = keys(AllScreenAliases).filter((screen) => {
        const [min] = AllScreenAliases[screen];
        if (theme.screens[min] <= windowWidth) {
          return true;
        }
      });

      const screenAliasesValue = screenAliases!.join(',');
      if (lastScreenAliasesValueRef.current !== screenAliasesValue) {
        lastScreenAliasesValueRef.current = screenAliasesValue;

        const is: Record<ScreenSizeInfoIsKey, boolean> = {} as Record<ScreenSizeInfoIsKey, boolean>;
        const smallerThan: Record<ScreenSizeInfoSmallerThanKey, boolean> = {} as Record<
          ScreenSizeInfoSmallerThanKey,
          boolean
        >;
        const smallerThanOrEqual: Record<ScreenSizeInfoSmallerThanOrEqualKey, boolean> = {} as Record<
          ScreenSizeInfoSmallerThanOrEqualKey,
          boolean
        >;
        const largerThan: Record<ScreenSizeInfoLargerThanKey, boolean> = {} as Record<
          ScreenSizeInfoLargerThanKey,
          boolean
        >;
        const largerThanOrEqual: Record<ScreenSizeInfoLargerThanOrEqualKey, boolean> = {} as Record<
          ScreenSizeInfoLargerThanOrEqualKey,
          boolean
        >;

        keys(AllScreenAliases).forEach((screen) => {
          is[screen] = screenAliases[screenAliases.length - 1] === screen;
          smallerThan[screen] = !screenAliases.includes(screen);
          smallerThanOrEqual[screen] = !screenAliases.includes(screen) || is[screen];
          largerThan[screen] = screenAliases.includes(screen) && !is[screen];
          largerThanOrEqual[screen] = screenAliases.includes(screen);
        });

        is.mobile = is.mobileSm || is.mobileMd || is.mobileLg;
        is.tablet = is.tabletSm || is.tabletMd || is.tabletLg;
        is.desktop = is.desktopSm || is.desktopMd || is.desktopLg;

        smallerThan.tablet = is.mobile;
        smallerThan.desktop = is.mobile || is.tablet;
        smallerThanOrEqual.mobile = is.mobile;
        smallerThanOrEqual.tablet = is.mobile || is.tablet;
        smallerThanOrEqual.desktop = is.mobile || is.tablet || is.desktop;
        largerThan.mobile = is.tablet || is.desktop;
        largerThan.tablet = is.desktop;
        largerThanOrEqual.mobile = is.mobile || is.tablet || is.desktop;
        largerThanOrEqual.tablet = is.tablet || is.desktop;
        largerThanOrEqual.desktop = is.desktop;

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
