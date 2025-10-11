import React from 'react';

interface Props extends Omit<TProps, 'c' | 'color'> {}

export const TPrimary = (props: Props) => {
  return <T color='primary' {...props} />;
};
export const TSecondary = (props: Props) => {
  return <T color='secondary' {...props} />;
};
export const TSuccess = (props: Props) => {
  return <T color='success' {...props} />;
};
export const TWarning = (props: Props) => {
  return <T color='warning' {...props} />;
};
export const TError = (props: Props) => {
  return <T color='error' {...props} />;
};
export const TAccent = (props: Props) => {
  return <T color='textAccent' {...props} />;
};
export const TBlurry = (props: Props) => {
  return <T color='textBlurry' {...props} />;
};
export const TLighten = (props: Props) => {
  return <T color='textLighten' {...props} />;
};
