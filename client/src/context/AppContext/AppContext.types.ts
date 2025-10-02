import { AuthInfo } from '@const';

export interface AppContextValue {
  // 테마
  colorScheme: 'light' | 'dark';
  setColorScheme: (colorScheme: 'light' | 'dark') => void;
  toggleColorScheme: () => void;
  // 창 활성화 여부
  isWindowActive: boolean;
  // 인증
  auth: AuthInfo | null;
  setAuth: (auth: AuthInfo) => void;
  clearAuth: () => void;
  // 화면 잠금
  isLock: boolean;
  setIsLock: (lock: boolean) => void;
  // HTML 로딩
  showHtmlLoading: () => void;
  hideHtmlLoading: () => void;
  removeHtmlLoading: () => void;
}
