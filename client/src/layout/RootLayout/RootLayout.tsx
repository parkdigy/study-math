/********************************************************************************************************************
 * 루트 레이아웃 컴포넌트
 * ******************************************************************************************************************/

import '../../init';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContextProvider, LoadingContextProvider } from '@context';
import { AxiosLoading, ErrorRetry, Loading, LoadingCommands } from '@ccomp';
import RootLayoutAppInitializer from './RootLayoutAppInitializer';
import { useErrorBoundary, withErrorBoundary } from 'react-use-error-boundary';
import { loadable } from '@common';
import DefaultLayout from '../DefaultLayout';
import '../../sass/index.scss';

const RootLayout = withErrorBoundary(() => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const [error] = useErrorBoundary((error) => {
    const errorName = (error as Error).name;
    if (errorName === 'ChunkLoadError') {
      setErrorName(errorName);
      loadable.checkUpdate();
    }
  });

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const htmlLoadingHideCompleteTimer = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorName, setErrorName] = useState<string | undefined>();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    hideHtmlLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (error) {
      const htmlLoadingEl = document.getElementById('___appLoading');
      if (htmlLoadingEl) {
        htmlLoadingEl.classList.remove('show');
        htmlLoadingEl.classList.add('hide');

        setTimeout(() => {
          htmlLoadingEl.classList.add('hide-complete');
        }, 300);
      }
    }
  }, [error]);

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
   * Render
   * ******************************************************************************************************************/

  if (error) {
    return (
      <>
        {errorName === 'ChunkLoadError' ? (
          <Loading
            ref={(commands: LoadingCommands) => {
              if (commands) {
                commands.show();
              }
            }}
          />
        ) : (
          <ErrorRetry fullScreen onRetry={() => window.location.reload()} />
        )}
      </>
    );
  } else {
    return (
      <BrowserRouter>
        <AppContextProvider value={{ showHtmlLoading, hideHtmlLoading, removeHtmlLoading }}>
          <RootLayoutAppInitializer />

          <LoadingContextProvider>
            <AxiosLoading />

            <Routes>
              <Route path='/*' element={<DefaultLayout />} />
            </Routes>
          </LoadingContextProvider>
        </AppContextProvider>
      </BrowserRouter>
    );
  }
});

export default RootLayout;
