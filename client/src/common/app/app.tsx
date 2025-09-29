import { NavigateFunction } from 'react-router';
import { ApiResult } from '@api';
import { Location } from 'react-router';
import { toast } from '@toast';
import _copyToClipboard from 'copy-to-clipboard';
import { Theme } from '@theme';

let _colorScheme: 'light' | 'dark' = 'light';
let _theme: Theme = Theme;
let _location: Location<any> | undefined;
let _navigate: NavigateFunction | undefined;
let _navigateScrollTopPos = 0;

const app = {
  /********************************************************************************************************************
   * Location
   * ******************************************************************************************************************/

  setLocation(location: Location<any>) {
    _location = location;
  },

  getLocation() {
    return _location;
  },

  /********************************************************************************************************************
   * Navigate
   * ******************************************************************************************************************/

  /**
   * 페이지 이동 함수 설정
   * @param navigate 페이지 이동 함수
   */
  setNavigate(navigate: NavigateFunction) {
    _navigate = navigate;
  },

  /**
   * 페이지 이동
   * @param path 이동할 경로
   * @param replace 히스토리 교체 여부
   * @param scrollTopPos 이동 후 스크롤 위치
   */
  navigate(path: string, replace = false, scrollTopPos = 0) {
    if (_navigate) {
      _navigateScrollTopPos = scrollTopPos;
      const currentPath = `${_location?.pathname}${_location?.search}${_location?.hash}`;
      if (path === currentPath) {
        window.scrollTo({ left: 0, top: 0 });
      } else {
        _navigate(path, { replace });
      }
    } else {
      console.log('!Not set navigate.');
    }
  },

  /**
   * 페이지 이동 후 스크롤 위치 설정
   * @param topPos 이동 후 스크롤 위치
   */
  setNavigateScrollTopPos(topPos: number) {
    _navigateScrollTopPos = topPos;
  },

  /**
   * 페이지 이동 후 스크롤 위치 반환
   * @returns 이동 후 스크롤 위치
   */
  getNavigateScrollTopPos() {
    return _navigateScrollTopPos;
  },

  /********************************************************************************************************************
   * Color Scheme
   * ******************************************************************************************************************/

  setColorScheme(colorScheme: 'light' | 'dark') {
    _colorScheme = colorScheme;
  },

  getColorScheme() {
    return _colorScheme;
  },

  /********************************************************************************************************************
   * Theme
   * ******************************************************************************************************************/

  setTheme(theme: Theme) {
    _theme = theme;
  },

  getTheme() {
    return _theme;
  },

  /********************************************************************************************************************
   * Alert
   * ******************************************************************************************************************/

  /**
   * 성공 알림 표시
   * @param msg 메시지
   */
  showSuccessAlert(msg: string) {
    toast.default(msg, { type: 'success' });
  },

  /**
   * 오류 알림 표시
   * @param msg 메시지
   */
  showErrorAlert(msg: string) {
    toast.default(msg);
  },

  /********************************************************************************************************************
   * 클립보드에 복사
   * ******************************************************************************************************************/

  copyToClipboard(text: string, toastMessage?: string) {
    _copyToClipboard(text);
    if (toastMessage) {
      toast.default(toastMessage);
    }
  },

  /********************************************************************************************************************
   * Axios
   * ******************************************************************************************************************/

  getAxiosApiErrorResult(err: any): ApiResult['result'] | undefined {
    return err.response?.data?.result;
  },

  getAxiosApiErrorResultCode(err: any): ApiResult['result']['c'] | undefined {
    return err.response?.data?.result?.c;
  },

  getAxiosApiErrorResultMessage(err: any): ApiResult['result']['m'] | undefined {
    const result = this.getAxiosApiErrorResult(err);
    if (result) {
      return result.m;
    } else {
      return err.message;
    }
  },

  getAxiosApiErrorResultError(err: any): ApiResult['result']['e'] | undefined {
    return err.response?.data?.result?.e;
  },

  /********************************************************************************************************************
   * Hash
   * ******************************************************************************************************************/

  deHash(location?: Location) {
    const values: Dict<string> = {};
    const hash = ifUndefined(location, window.location).hash.substring(1);
    hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
      values[decodeURIComponent(key)] = decodeURIComponent(value);
      return substring;
    });
    return values;
  },
};

export default app;
