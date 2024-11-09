import React from 'react';
import { SpanProps as Props } from './Span.types';
import Box from '../Box';

export const Span = (props: Props) => {
  return <Box display='inline-block' {...props} />;
};

export default Span;
