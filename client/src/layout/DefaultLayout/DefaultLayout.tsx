/********************************************************************************************************************
 * 기본 레이아웃 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import MainRouter from '../../router';
import { useAppState } from '@context';
import app from '@app';
import { useLocation } from 'react-router-dom';

const DefaultLayout = () => {
  const { removeHtmlLoading } = useAppState();
  const location = useLocation();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    removeHtmlLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({ top: app.getNavigateScrollTopPos() });
    app.setNavigateScrollTopPos(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <MainRouter />;
};

export default DefaultLayout;
