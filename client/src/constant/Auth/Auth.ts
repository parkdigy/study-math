/********************************************************************************************************************
 * 인증 API
 * ******************************************************************************************************************/

import api from '@api';
import { ApiRequestData } from '@pdg/api';
import { AuthSignInInfo, AuthSignIn, AuthSignUp } from './Auth.types';

export default {
  // 로그인 정보
  info() {
    return api.get<AuthSignInInfo>('auth.signin');
  },
  // 로그인
  signIn(data: ApiRequestData) {
    return api.post<AuthSignIn>('auth.signin', data);
  },
  // 회원가입
  signUp(data: ApiRequestData) {
    return api.post<AuthSignUp>('auth.signup', data);
  },
};
