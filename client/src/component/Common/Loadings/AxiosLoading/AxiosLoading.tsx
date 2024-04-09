/********************************************************************************************************************
 * Axios 로딩 관리 컴포넌트
 * - 요청/응답을 Intercept 하여 로딩을 표시/숨김 처리
 * ******************************************************************************************************************/

import axios from 'axios';
import { ApiError, ApiRequestConfig } from '@pdg/api';
import { useLoadingState } from '@context';

const AxiosLoading = () => {
  const { showLoading, hideLoading } = useLoadingState();

  useLayoutEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const requestConfig = config as ApiRequestConfig;
        if (!requestConfig.silent) {
          showLoading();
        }
        return config;
      },
      (error: ApiError) => {
        const config: ApiRequestConfig | undefined = error.config;
        if (config) {
          if (!config.silent) {
            hideLoading();
          }
        }
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        const config: ApiRequestConfig = response.config;
        if (config) {
          if (!config.silent) {
            hideLoading();
          }
        }
        return response;
      },
      (error: ApiError) => {
        const config: ApiRequestConfig | undefined = error.config;
        if (config) {
          if (!config.silent) {
            hideLoading();
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [showLoading, hideLoading]);

  return null;
};

export default AxiosLoading;
