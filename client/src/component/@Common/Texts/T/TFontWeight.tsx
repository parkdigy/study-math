import React from 'react';

interface Props extends Omit<TProps, 'fw' | 'fontWeight'> {}

export const TBold = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={700} {...props} />;
});
export const T100 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={100} {...props} />;
});
export const T200 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={200} {...props} />;
});
export const T300 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={300} {...props} />;
});
export const T400 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={400} {...props} />;
});
export const T500 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={500} {...props} />;
});
export const T600 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={600} {...props} />;
});
export const T700 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={700} {...props} />;
});
export const T800 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={800} {...props} />;
});
export const T900 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} fw={900} {...props} />;
});
