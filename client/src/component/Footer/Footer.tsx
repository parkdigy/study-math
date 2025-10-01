import React from 'react';
import { FooterProps as Props } from './Footer.types';
import { ContentContainer } from '@ccomp';

export const Footer = ({}: Props) => {
  return (
    <ContentContainer pv={20} containerProps={{ backgroundColor: 'opacity05' }}>
      <Stack row center spaceBetweenJustify>
        <T>Footer</T>
        <T>Copyright @ All Rights Reserved.</T>
      </Stack>
    </ContentContainer>
  );
};

export default Footer;
