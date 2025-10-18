import React from 'react';
import api, { ApiResult } from '@api';
import config from '../config';

interface VersionApp extends ApiResult {
  data: { v: string };
}

const LoadableLoading = () => {
  useEffect(() => {
    __showLoading();
    return () => {
      __hideLoading();
    };
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
