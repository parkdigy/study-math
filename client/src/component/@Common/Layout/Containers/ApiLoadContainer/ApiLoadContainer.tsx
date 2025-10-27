import React from 'react';
import { ApiLoadContainerCommands, ApiLoadContainerProps as Props } from './ApiLoadContainer.types';
import { ErrorRetry } from '../../../Errors';
import { useTimeoutRef } from '@pdg/react-hook';
import app from '@app';

export const ApiLoadContainer = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T = any, TApiData = any>(
    { children, load, data, retryDelay = 1000, onLoad, ...props }: Props<T, TApiData>,
    ref: React.ForwardedRef<ApiLoadContainerCommands>
  ) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const isLoadingRef = useRef(false);
    const isShowLoadingRef = useRef(false);

    /********************************************************************************************************************
     * Timeout
     * ******************************************************************************************************************/

    const [, setLoadTimeout] = useTimeoutRef();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [loadStatus, setLoadStatus] = useState<'loading' | 'success' | 'error' | 'empty_error'>('loading');
    const [error, setError] = useState<any>();
    const [apiData, setApiData] = useState<TApiData>();

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      return () => {
        if (isShowLoadingRef.current) {
          __hideLoading();
          isShowLoadingRef.current = false;
        }
      };
    }, []);

    useEffect(() => {
      if (load) {
        doLoad(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load, data]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const doLoad = useCallback(
      (retry: boolean) => {
        if (isLoadingRef.current) return;
        isLoadingRef.current = true;

        __showLoading();
        isShowLoadingRef.current = true;

        setLoadStatus((prev) => (prev === 'error' ? 'loading' : prev));

        setLoadTimeout(
          () => {
            onLoad(data as any)
              .then((data) => {
                setApiData(data);
                setLoadStatus('success');
              })
              .catch((err) => {
                setLoadStatus(err === undefined ? 'empty_error' : 'error');
                setError(err);
              })
              .finally(() => {
                if (isShowLoadingRef.current) {
                  __hideLoading();
                  isShowLoadingRef.current = false;
                  isLoadingRef.current = false;
                }
              });
          },
          retry ? retryDelay : 0
        );
      },
      [data, onLoad, retryDelay, setLoadTimeout]
    );

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<ApiLoadContainerCommands>(
      () => ({
        load() {
          doLoad(false);
        },
      }),
      [doLoad]
    );

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }
    }, [commands, ref]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const errorMessage = useMemo(() => {
      if (error) {
        const apiErrorCode = app.getAxiosApiErrorResultCode(error);
        if (apiErrorCode !== undefined) {
          return `(A-${apiErrorCode})\n문제가 발생했습니다.`;
        } else if (error.status) {
          return `(E-${error.status})\n문제가 발생했습니다.`;
        } else {
          return '문제가 발생했습니다.';
        }
      }
    }, [error]);

    return contains(['loading', 'empty_error'], loadStatus) ? null : loadStatus === 'error' ? (
      <ErrorRetry message={errorMessage} onRetry={() => doLoad(true)} />
    ) : (
      <Flex {...props}>{typeof children === 'function' ? children(apiData as any) : children}</Flex>
    );
  })
);

export default ApiLoadContainer;
