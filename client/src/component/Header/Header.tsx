import React from 'react';
import { HeaderProps as Props } from './Header.types';
import { ContentContainer, Logo } from '@ccomp';
import { useLocation } from 'react-router';
import './Header.scss';

export const Header = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ContentContainer className='Header' pv={20} containerProps={{ backgroundColor: 'opacity05' }}>
      <Flex row center spaceBetweenJustify height={30}>
        <Logo onClick={location.pathname === '/' ? undefined : () => __navigate('/')} />
      </Flex>
    </ContentContainer>
  );
};

export default Header;
