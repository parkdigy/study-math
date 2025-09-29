/********************************************************************************************************************
 * App 컴포넌트
 * ******************************************************************************************************************/

import './init';
import './sass/index.scss';

import React from 'react';
import { RootLayout } from './layout';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router';
import { ErrorBoundary } from '@ccomp';

Modal.setAppElement('#root');

const App = () => {
  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  React.useEffect(() => {
    /** 페이지 Refresh 시 스크롤 위치가 이상하게 잡히는 현상 해결을 위한 처리 */
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';

      const handler = () => {
        nextTick(() => {
          history.scrollRestoration = 'auto';
        }, 300);
      };

      window.addEventListener('load', handler);

      return () => {
        window.removeEventListener('load', handler);
      };
    }
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ErrorBoundary root>
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
