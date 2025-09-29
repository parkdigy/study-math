import React from 'react';

interface Props extends Omit<TProps, 'fontWeight'> {}

export const TBold = (props: Props) => {
  return <T fontWeight={700} {...props} />;
};

export const T100 = (props: Props) => {
  return <T fontWeight={100} {...props} />;
};

export const T200 = (props: Props) => {
  return <T fontWeight={200} {...props} />;
};

export const T300 = (props: Props) => {
  return <T fontWeight={300} {...props} />;
};

export const T400 = (props: Props) => {
  return <T fontWeight={400} {...props} />;
};

export const T500 = (props: Props) => {
  return <T fontWeight={500} {...props} />;
};

export const T600 = (props: Props) => {
  return <T fontWeight={600} {...props} />;
};

export const T700 = (props: Props) => {
  return <T fontWeight={700} {...props} />;
};

export const T800 = (props: Props) => {
  return <T fontWeight={800} {...props} />;
};

export const T900 = (props: Props) => {
  return <T fontWeight={900} {...props} />;
};
