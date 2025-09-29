import React from 'react';
import { MainRouter } from '../../router';
import { useAppState } from '@context';
import { ErrorBoundary, Footer, Header } from '@comp';
import './DefaultLayout.scss';

const DefaultLayout = () => {
  const { removeHtmlLoading } = useAppState();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    removeHtmlLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='DefaultLayout'>
      <Header layout='default' />
      <div className='DefaultLayout-content-container'>
        <ErrorBoundary>
          <MainRouter />
        </ErrorBoundary>
      </div>

      <Footer layout='default' />
    </div>
  );
};

export default DefaultLayout;
