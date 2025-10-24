import { ApiResult } from '@api';
import { Location } from 'react-router';
import { toast } from '@toast';
import _copyToClipboard from 'copy-to-clipboard';
import { Theme } from '@theme';

let _colorScheme: 'light' | 'dark' = 'light';
let _theme: Theme = Theme;

const app = {
  /********************************************************************************************************************
   * Browser ID
   * ******************************************************************************************************************/
  getBrowserId() {
    let id = localStorage.getItem('browserId');
    if (!id) {
      id = crypto.randomUUID().replace(/-/g, '');
      localStorage.setItem('browserId', id);
    }
    return id;
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

  /********************************************************************************************************************
   * 스크롤
   * ******************************************************************************************************************/

  getScrollTop() {
    return window.scrollY || document.documentElement.scrollTop;
  },

  scrollToTop(top = 0, smooth = false) {
    window.scrollTo({ left: 0, top, behavior: smooth ? 'smooth' : 'instant' });
  },
};

export default app;
