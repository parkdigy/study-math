import React from 'react';
import { SpanProps as Props } from './Span.types';
import Box from '../Box';

export const Span = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Box ref={ref} component='span' {...props} />;
});

export default Span;
