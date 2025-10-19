import React from 'react';
import { ApiLoadContainerCommands, ApiLoadContainerProps as Props } from './ApiLoadContainer.types';
import { ErrorRetry } from '../../../Errors';
import { useAutoUpdateRef, useTimeoutRef } from '@pdg/react-hook';

export const ApiLoadContainer = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T = any, TApiData = any>(
    { children, load, data, retryDelay = 1000, onLoad, ...props }: Props<T, TApiData>,
    ref: React.ForwardedRef<ApiLoadContainerCommands>
  ) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const isShowLoadingRef = useRef(false);
    const dataRef = useAutoUpdateRef<any>(data);

    /********************************************************************************************************************
     * Timeout
     * ******************************************************************************************************************/

    const [, setLoadTimeout] = useTimeoutRef();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [loadStatus, setLoadStatus] = useState<'loading' | 'success' | 'error'>('loading');
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
    }, [load]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const doLoad = useCallback(
      (retry: boolean) => {
        __showLoading();
        isShowLoadingRef.current = true;

        setLoadStatus((prev) => (prev === 'error' ? 'loading' : prev));

        setLoadTimeout(
          () => {
            onLoad(dataRef.current)
              .then((data) => {
                setApiData(data);
                setLoadStatus('success');
              })
              .catch(() => {
                setLoadStatus('error');
              })
              .finally(() => {
                if (isShowLoadingRef.current) {
                  __hideLoading();
                  isShowLoadingRef.current = false;
                }
              });
          },
          retry ? retryDelay : 0
        );
      },
      [dataRef, onLoad, retryDelay, setLoadTimeout]
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

    return loadStatus === 'loading' ? null : loadStatus === 'error' ? (
      <ErrorRetry onRetry={() => doLoad(true)} />
    ) : (
      <Flex {...props}>{typeof children === 'function' ? children(apiData as any) : children}</Flex>
    );
  })
);

export default ApiLoadContainer;
