/********************************************************************************************************************
 * 기본 레이아웃 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import MainRouter from '../../router';
import { useAppState } from '@context';
import { useLocation } from 'react-router';

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
    window.scrollTo({ top: __getNavigateScrollTopPos() });
    __setNavigateScrollTopPos(0);
  }, [location.pathname, location.hash]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <MainRouter />;
};

export default DefaultLayout;
