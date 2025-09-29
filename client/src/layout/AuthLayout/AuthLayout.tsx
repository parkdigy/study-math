import React from 'react';
import { useAppState } from '@context';
import { AuthRouter } from '../../router';
import { ErrorBoundary, Footer, Header } from '@comp';
import './AuthLayout.scss';

interface Props {}

export const AuthLayout = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { removeHtmlLoading } = useAppState();

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

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
    <div className='AuthLayout'>
      <Header layout='auth' />
      <div className='AuthLayout-content-container'>
        <ErrorBoundary>
          <AuthRouter />
        </ErrorBoundary>
      </div>
      <Footer layout='auth' />
    </div>
  );
};

export default AuthLayout;
