/********************************************************************************************************************
 * 에러 처리 컴포넌트
 * - CheckLoadError 발생 시 업데이트 체크 실행
 * ******************************************************************************************************************/

import React from 'react';
import { ErrorBoundaryProps as Props } from './ErrorBoundary.types';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
import { config, loadable } from '@common';
import { Loading, LoadingCommands } from '../../Loadings';
import { useLocation } from 'react-router';
import { useFirstSkipEffect } from '@pdg/react-hook';

const FallbackRender = ({ error, resetErrorBoundary, root }: FallbackProps & { root?: boolean }) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const iconClassName = `material-icons-${LiveMaterialIconTypes[0]}`.replace('-filled', '');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  const isChunkLoadError = error.name === 'ChunkLoadError';

  if (isChunkLoadError) {
    loadable.checkUpdate();
  }

  const htmlLoadingEl = document.getElementById('___appLoading');
  if (htmlLoadingEl) {
    htmlLoadingEl.classList.remove('show');
    htmlLoadingEl.classList.add('hide');

    setTimeout(() => {
      htmlLoadingEl.classList.remove('hide-complete');
      htmlLoadingEl.classList.add('hide-complete');
    }, 300);
  }

  useFirstSkipEffect(() => {
    resetErrorBoundary();
  }, [location]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div
      style={{
        flex: root ? undefined : 1,
        width: root ? '100%' : undefined,
        height: root ? '100vh' : undefined,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          backgroundColor: isChunkLoadError ? undefined : '#555859',
          color: 'white',
          padding: '20px 30px',
          borderRadius: isChunkLoadError ? undefined : 20,
        }}
      >
        {isChunkLoadError ? (
          <Loading
            ref={(commands: LoadingCommands) => {
              if (commands) {
                commands.show();
              }
            }}
          />
        ) : (
          <>
            <i className={iconClassName} style={{ fontSize: 40 }}>
              error
            </i>
            {config.isLocal && (
              <div style={{ textAlign: 'center' }}>
                {error.stack && typeof error.stack === 'string' ? (
                  <div
                    style={{
                      height: 95,
                      lineHeight: 1.2,
                      overflowY: 'auto',
                      backgroundColor: '#333',
                      padding: 10,
                      borderRadius: 4,
                      wordBreak: 'break-all',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: (error.stack as string)
                        .replace('\n', '<br/><br/>')
                        .replace('\n', '<br/><br/>')
                        .replaceAll('\n', '<br/>'),
                    }}
                  />
                ) : (
                  <p>{error.message}</p>
                )}
              </div>
            )}
            <p style={{ lineHeight: 1.6, textAlign: 'center' }}>
              페이지를 불러오는 데 문제가 발생했습니다.
              <br />
              불편을 드려 죄송합니다.
              <br />
              <br />
              잠시 후 재시도 해주세요.
            </p>
            <button
              style={{ padding: '10px 20px', borderRadius: 4, backgroundColor: '#fff', color: '#555a61' }}
              onClick={resetErrorBoundary}
            >
              재시도
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const ErrorCatcher = ({ children, root }: { children: React.ReactNode; root?: boolean }) => {
  return (
    <ReactErrorBoundary fallbackRender={(props) => <FallbackRender {...props} root={root} />}>
      {children}
    </ReactErrorBoundary>
  );
};

const ErrorBoundary: React.FC<Props> = ({ children, root }) => {
  return <ErrorCatcher root={root}>{children}</ErrorCatcher>;
};

export default ErrorBoundary;
