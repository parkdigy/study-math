import React from 'react';
import { FooterProps as Props } from './Footer.types';
import { ContentContainer } from '@ccomp';

export const Footer = ({}: Props) => {
  return (
    <ContentContainer backgroundColor='opacity05' pv={20}>
      <Stack row center justifyContent='space-between'>
        <T>Footer</T>
        <T>Copyright @ All Rights Reserved.</T>
      </Stack>
    </ContentContainer>
  );
};

export default Footer;
