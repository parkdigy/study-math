import React from 'react';
import { TProps as Props } from './T.types';

export const T = ({ inline, center, textAlign, s, w, lh, c, ...props }: Props) => {
  const Component = inline ? Span : Div;

  return (
    <Component
      fontSize={s}
      fontWeight={w}
      lineHeight={lh}
      color={c}
      textAlign={ifUndefined(textAlign, center ? 'center' : undefined)}
      {...props}
    />
  );
};

export default T;
