import { Location as RouterLocation, SetURLSearchParams } from 'react-router';

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
   * Alert
   * ******************************************************************************************************************/

  /**
   * 성공 알림 표시
   * @param msg 메시지
   */
  showSuccessAlert(msg: string) {
    alert(msg);
  },

  /**
   * 오류 알림 표시
   * @param msg 메시지
   */
  showErrorAlert(msg: string) {
    alert(msg);
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

  /********************************************************************************************************************
   * Hash
   * ******************************************************************************************************************/

  deHash(location?: Location | RouterLocation) {
    const values: Dict<string> = {};
    const hash = ifUndefined(location, window.location).hash.substring(1);
    hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
      values[decodeURIComponent(key)] = decodeURIComponent(value);
      return substring;
    });
    return values;
  },

  /********************************************************************************************************************
   * SearchParams
   * ******************************************************************************************************************/

  updateSearchParams(setSearchParams: SetURLSearchParams, params: Dict<string | undefined>, reset = false) {
    setSearchParams((prev) => {
      if (reset) {
        prev
          .keys()
          .toArray()
          .forEach((key) => prev.delete(key));
      }

      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined) {
          if (value === '') {
            prev.delete(key);
          } else {
            prev.set(key, String(value));
          }
        }
      });

      return prev;
    });
  },
};

export default app;
