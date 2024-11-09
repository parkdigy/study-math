import React from 'react';
import { DivProps as Props } from './Div.types';
import Box from '../Box';

export const Div = ({ center, textAlign, ...props }: Props) => {
  return <Box display='block' textAlign={ifUndefined(textAlign, center ? 'center' : undefined)} {...props} />;
};

export default Div;
