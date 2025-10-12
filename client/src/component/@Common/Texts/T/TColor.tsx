import React from 'react';

interface Props extends Omit<TProps, 'c' | 'color'> {}

/********************************************************************************************************************
 * Default
 * ******************************************************************************************************************/

export const TPrimary = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='primary' {...props} />;
});
export const TOnPrimary = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='onPrimary' {...props} />;
});

export const TSecondary = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='secondary' {...props} />;
});
export const TOnSecondary = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='onSecondary' {...props} />;
});

export const TSuccess = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='success' {...props} />;
});
export const TOnSuccess = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='onSuccess' {...props} />;
});

export const TWarning = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='warning' {...props} />;
});
export const TOnWarning = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='onWarning' {...props} />;
});

export const TError = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='error' {...props} />;
});
export const TOnError = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='onError' {...props} />;
});

/********************************************************************************************************************
 * Text
 * ******************************************************************************************************************/

export const TAccent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='textAccent' {...props} />;
});
export const TBlurry = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='textBlurry' {...props} />;
});
export const TLighten = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='textLighten' {...props} />;
});

/********************************************************************************************************************
 * Etc
 * ******************************************************************************************************************/

export const TBackground = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='background' {...props} />;
});

/********************************************************************************************************************
 * Opacity
 * ******************************************************************************************************************/

export const TOpacity01 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity01' {...props} />;
});
export const TOpacity02 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity02' {...props} />;
});
export const TOpacity03 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity03' {...props} />;
});
export const TOpacity04 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity04' {...props} />;
});
export const TOpacity05 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity05' {...props} />;
});
export const TOpacity06 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity06' {...props} />;
});
export const TOpacity07 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity07' {...props} />;
});
export const TOpacity08 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity08' {...props} />;
});
export const TOpacity09 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity09' {...props} />;
});
export const TOpacity10 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity10' {...props} />;
});
export const TOpacity15 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity15' {...props} />;
});
export const TOpacity20 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity20' {...props} />;
});
export const TOpacity25 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity25' {...props} />;
});
export const TOpacity30 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity30' {...props} />;
});
export const TOpacity35 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity35' {...props} />;
});
export const TOpacity40 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity40' {...props} />;
});
export const TOpacity45 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity45' {...props} />;
});
export const TOpacity50 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity50' {...props} />;
});
export const TOpacity55 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity55' {...props} />;
});
export const TOpacity60 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity60' {...props} />;
});
export const TOpacity65 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity65' {...props} />;
});
export const TOpacity70 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity70' {...props} />;
});
export const TOpacity75 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity75' {...props} />;
});
export const TOpacity80 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity80' {...props} />;
});
export const TOpacity85 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity85' {...props} />;
});
export const TOpacity90 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity90' {...props} />;
});
export const TOpacity95 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacity95' {...props} />;
});

/********************************************************************************************************************
 * OpacityReverse
 * ******************************************************************************************************************/

export const TOpacityReverse01 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse01' {...props} />;
});
export const TOpacityReverse02 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse02' {...props} />;
});
export const TOpacityReverse03 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse03' {...props} />;
});
export const TOpacityReverse04 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse04' {...props} />;
});
export const TOpacityReverse05 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse05' {...props} />;
});
export const TOpacityReverse06 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse06' {...props} />;
});
export const TOpacityReverse07 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse07' {...props} />;
});
export const TOpacityReverse08 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse08' {...props} />;
});
export const TOpacityReverse09 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse09' {...props} />;
});
export const TOpacityReverse10 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse10' {...props} />;
});
export const TOpacityReverse15 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse15' {...props} />;
});
export const TOpacityReverse20 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse20' {...props} />;
});
export const TOpacityReverse25 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse25' {...props} />;
});
export const TOpacityReverse30 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse30' {...props} />;
});
export const TOpacityReverse35 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse35' {...props} />;
});
export const TOpacityReverse40 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse40' {...props} />;
});
export const TOpacityReverse45 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse45' {...props} />;
});
export const TOpacityReverse50 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse50' {...props} />;
});
export const TOpacityReverse55 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse55' {...props} />;
});
export const TOpacityReverse60 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse60' {...props} />;
});
export const TOpacityReverse65 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse65' {...props} />;
});
export const TOpacityReverse70 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse70' {...props} />;
});
export const TOpacityReverse75 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse75' {...props} />;
});
export const TOpacityReverse80 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse80' {...props} />;
});
export const TOpacityReverse85 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse85' {...props} />;
});
export const TOpacityReverse90 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse90' {...props} />;
});
export const TOpacityReverse95 = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <T ref={ref} c='opacityReverse95' {...props} />;
});
