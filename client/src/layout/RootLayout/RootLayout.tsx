/********************************************************************************************************************
 * 루트 레이아웃 컴포넌트
 * ******************************************************************************************************************/

import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { AppContextProvider, AppContextValue, ScreenSizeContextProvider } from '@context';
import { ToastContainer } from '@ccomp';
import RootLayoutAppInitializer from './RootLayoutAppInitializer';
import { config } from '@common';
import DefaultLayout from '../DefaultLayout';
import { ThemeProvider } from '@theme';
import app from '@app';
import DevButtons from './DevButtons';
import { RootLoading } from './RootLoading';

const RootLayout = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const htmlLoadingHideCompleteTimer = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(
    // 시스템 설정에 따른 테마 적용
    // window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    'light'
  );
  const [isLock, setIsLock] = useState(false);
  const [isWindowActive, setIsWindowActive] = useState(true);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    app.setColorScheme(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsWindowActive(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getHtmlLoading = useCallback((): HTMLElement | null => {
    return document.getElementById('___appLoading');
  }, []);

  const showHtmlLoading = useCallback(() => {
    const el = getHtmlLoading();
    if (el) {
      if (htmlLoadingHideCompleteTimer.current) {
        clearTimeout(htmlLoadingHideCompleteTimer.current);
        htmlLoadingHideCompleteTimer.current = undefined;
      }

      el.classList.remove('hide');
      el.classList.remove('hide-complete');
      el.classList.add('show');
    }
  }, [getHtmlLoading]);

  const hideHtmlLoading = useCallback(() => {
    const el = getHtmlLoading();
    if (el) {
      if (htmlLoadingHideCompleteTimer.current) {
        clearTimeout(htmlLoadingHideCompleteTimer.current);
        htmlLoadingHideCompleteTimer.current = undefined;
      }

      el.classList.remove('show');
      el.classList.add('hide');

      htmlLoadingHideCompleteTimer.current = setTimeout(() => {
        htmlLoadingHideCompleteTimer.current = undefined;

        el.classList.add('hide-complete');
      }, 300);
    }
  }, [getHtmlLoading]);

  const removeHtmlLoading = useCallback(() => {
    const el = getHtmlLoading();
    if (el) {
      if (htmlLoadingHideCompleteTimer.current) {
        clearTimeout(htmlLoadingHideCompleteTimer.current);
        htmlLoadingHideCompleteTimer.current = undefined;
      }

      el.classList.remove('show');
      el.classList.add('hide');
      setTimeout(() => {
        el.parentNode?.removeChild(el);
      }, 300);
    }
  }, [getHtmlLoading]);

  /********************************************************************************************************************
   * Context Value
   * ******************************************************************************************************************/

  const contextValue = useMemo<AppContextValue>(
    () => ({
      // 테마
      colorScheme,
      setColorScheme,
      toggleColorScheme: () => setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light')),
      // 창 활성화 여부
      isWindowActive,
      // 화면 잠금
      isLock,
      setIsLock,
      // HTML 로딩
      showHtmlLoading,
      hideHtmlLoading,
      removeHtmlLoading,
    }),
    [colorScheme, hideHtmlLoading, isLock, isWindowActive, removeHtmlLoading, showHtmlLoading]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ThemeProvider colorScheme={colorScheme}>
      <ScreenSizeContextProvider>
        <AppContextProvider value={contextValue}>
          <RootLoading />

          <div className='RootLayout'>
            <RootLayoutAppInitializer />

            <Routes>
              <Route path='/*' element={<DefaultLayout />} />
            </Routes>
            {config.isLocal && <DevButtons />}
            <Dialog />
            <ToastContainer />
          </div>
        </AppContextProvider>
      </ScreenSizeContextProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
