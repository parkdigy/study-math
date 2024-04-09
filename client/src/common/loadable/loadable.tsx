import React from 'react';
import api, { ApiResult } from '@api';
import config from '../config';
import { useLoadingState } from '@context';

interface VersionApp extends ApiResult {
  data: { v: string };
}

const LoadableLoading = () => {
  const { showLoading, hideLoading } = useLoadingState();

  useEffect(() => {
    showLoading();
    return () => {
      hideLoading();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default {
  /**
   * Loadable 기본 옵션
   */
  options: {
    fallback: <LoadableLoading />,
  },

  /**
   * 업데이트 체크
   */
  checkUpdate() {
    api.get<VersionApp>('version.app').then(({ data: { v } }) => {
      if (v !== config.version) {
        window.location.reload();
      }
    });
  },
};
