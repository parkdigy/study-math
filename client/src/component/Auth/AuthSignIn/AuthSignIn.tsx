import React from 'react';
import { AuthSignInProps as Props } from './AuthSignIn.types';
import { Form, FormCheckbox, FormEmail, FormPassword, PageRootContainer, TTitle } from '@ccomp';
import { Const } from '@const';
import { useAppState, useScreenSize } from '@context';
import app from '@app';
import { useSearchParams } from 'react-router';

export const AuthSignIn = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const [searchParams] = useSearchParams();
  const { setAuth } = useAppState();
  const screen = useScreenSize();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback(
    (values: Dict) => {
      // 로그인 API 호출
      Const.Auth.signIn(values).then(({ data }) => {
        setAuth(data);

        app.navigate(ifEmpty(searchParams.get('url'), '/'));
      });
    },
    [searchParams, setAuth]
  );

  const isSmallScreen = screen.smallerThanOrEqual.mobileSm;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PageRootContainer fullScreen centerCenter ph={20}>
      <Stack center width={isSmallScreen ? '100%' : 400} spacing={20}>
        <TTitle bold>로그인</TTitle>

        <Form hideTitle onSubmit={handleSubmit}>
          <Stack spacing={20}>
            <Stack spacing={10}>
              <FormEmail name='email' title='이메일' placeholder='이메일을 입력해 주세요' required />
              <FormPassword name='password' title='비밀번호' placeholder='비밀번호를 입력해 주세요' required />
              <FormCheckbox name='stay' label='로그인 상태 유지' />
            </Stack>

            <Stack fullWidth spacing={10}>
              <Button type='submit' size='lg'>
                로그인
              </Button>
              <Button type='button' url='/auth/signup' color='secondary' size='lg'>
                회원가입
              </Button>
            </Stack>
          </Stack>
        </Form>
      </Stack>
    </PageRootContainer>
  );
};

export default AuthSignIn;
