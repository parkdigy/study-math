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
};

export default app;
