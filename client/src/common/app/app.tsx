import { NavigateFunction } from 'react-router';

let _navigate: NavigateFunction | undefined;
let _navigateScrollTopPos = 0;
let _showLoading: (() => void) | undefined;
let _hideLoading: (() => void) | undefined;

const app = {
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
   * @param scrollTopPos 이동 후 스크롤 위치
   */
  navigate(path: string, scrollTopPos = 0) {
    if (_navigate) {
      _navigateScrollTopPos = scrollTopPos;
      _navigate(path);
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
   * Loading
   * ******************************************************************************************************************/

  _setLoading(showLoading: () => void, hideLoading: () => void) {
    _showLoading = showLoading;
    _hideLoading = hideLoading;
  },

  showLoading() {
    if (_showLoading) {
      _showLoading();
    }
  },

  hideLoading() {
    if (_hideLoading) {
      _hideLoading();
    }
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
};

export default app;
