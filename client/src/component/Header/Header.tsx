import React from 'react';
import { HeaderProps as Props } from './Header.types';
import { ContentContainer, Logo } from '@ccomp';
import app from '@app';
import { useLocation } from 'react-router';
import './Header.scss';

export const Header = ({ layout }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ContentContainer className='Header' pv={20} containerProps={{ backgroundColor: 'opacity05' }}>
      <Stack row center spaceBetweenJustify height={30}>
        <Logo onClick={location.pathname === '/' ? undefined : () => app.navigate('/')} />
        {layout !== 'auth' && (
          <Stack row center spacing={5}>
            <Button
              url={
                location.pathname === '/' ? '/auth/signin' : `/auth/signin?url=${encodeURIComponent(location.pathname)}`
              }
              size='xs'
            >
              로그인
            </Button>
            <Button url='/auth/signup' size='xs'>
              회원가입
            </Button>
          </Stack>
        )}
      </Stack>
    </ContentContainer>
  );
};

export default Header;
