import React from 'react';
import { AuthSignUpProps as Props } from './AuthSignUp.types';
import { Form, FormEmail, FormPassword, PageRootContainer, TTitle } from '@ccomp';
import { Const } from '@const';
import { useAppState, useScreenSize } from '@context';

export const AuthSignUp = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { setAuth } = useAppState();
  const screen = useScreenSize();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback(
    (values: Dict) => {
      // 로그인 API 호출
      Const.Auth.signUp(values).then(({ data }) => {
        setAuth(data);

        __navigate('/');
      });
    },
    [setAuth]
  );

  const isSmallScreen = screen.smallerThanOrEqual.mobileSm;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PageRootContainer fullScreen centerCenter ph={20}>
      <Flex center width={isSmallScreen ? undefined : 400} gap={20}>
        <TTitle bold>회원가입</TTitle>

        <Form titlePosition='left' onSubmit={handleSubmit}>
          <Flex gap={20}>
            <Flex gap={10}>
              <FormEmail name='email' title='이메일' placeholder='이메일을 입력해 주세요' required />
              <FormPassword name='password' title='비밀번호' placeholder='비밀번호를 입력해 주세요' required rules />
              <FormPassword
                name='password_confirm'
                title='비밀번호 확인'
                placeholder='비밀번호를 다시 입력해 주세요'
                required
                linkName='password'
              />
            </Flex>

            <Flex fullWidth gap={10}>
              <Button type='submit' size='lg'>
                회원가입
              </Button>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </PageRootContainer>
  );
};

export default AuthSignUp;
