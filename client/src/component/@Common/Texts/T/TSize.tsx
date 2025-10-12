import React from 'react';

interface SizeProps extends Omit<TProps, 's' | 'size' | 'fontSize'> {}
interface SizeFontWeightProps extends Omit<TProps, 's' | 'size' | 'fontSize' | 'fw' | 'fontWeight'> {}

/********************************************************************************************************************
 * TCaption
 * ******************************************************************************************************************/

export const TCaption = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='caption' {...props} />;
});
export const TCaptionBold = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <TBold ref={ref} s='caption' {...props} />;
});
export const TCaption100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='caption' {...props} />;
});
export const TCaption200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='caption' {...props} />;
});
export const TCaption300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='caption' {...props} />;
});
export const TCaption400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='caption' {...props} />;
});
export const TCaption500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='caption' {...props} />;
});
export const TCaption600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='caption' {...props} />;
});
export const TCaption700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='caption' {...props} />;
});
export const TCaption800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='caption' {...props} />;
});
export const TCaption900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='caption' {...props} />;
});

/********************************************************************************************************************
 * TBodySmall
 * ******************************************************************************************************************/

export const TBodySmall = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmallBold = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <TBold ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='bodySmall' {...props} />;
});
export const TBodySmall900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='bodySmall' {...props} />;
});

/********************************************************************************************************************
 * TBody
 * ******************************************************************************************************************/

export const TBody = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='body' {...props} />;
});
export const TBodyBold = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <TBold ref={ref} s='body' {...props} />;
});
export const TBody100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='body' {...props} />;
});
export const TBody200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='body' {...props} />;
});
export const TBody300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='body' {...props} />;
});
export const TBody400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='body' {...props} />;
});
export const TBody500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='body' {...props} />;
});
export const TBody600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='body' {...props} />;
});
export const TBody700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='body' {...props} />;
});
export const TBody800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='body' {...props} />;
});
export const TBody900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='body' {...props} />;
});

/********************************************************************************************************************
 * TBodyLarge
 * ******************************************************************************************************************/

export const TBodyLarge = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLargeBold = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <TBold ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='bodyLarge' {...props} />;
});
export const TBodyLarge900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='bodyLarge' {...props} />;
});

/********************************************************************************************************************
 * TTitleSmall
 * ******************************************************************************************************************/

export const TTitleSmall = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmallBold = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <TBold ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='titleSmall' {...props} />;
});
export const TTitleSmall900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='titleSmall' {...props} />;
});

/********************************************************************************************************************
 * TTitle
 * ******************************************************************************************************************/

export const TTitle = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='title' {...props} />;
});
export const TTitleBold = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <TBold ref={ref} s='title' {...props} />;
});
export const TTitle100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='title' {...props} />;
});
export const TTitle200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='title' {...props} />;
});
export const TTitle300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='title' {...props} />;
});
export const TTitle400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='title' {...props} />;
});
export const TTitle500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='title' {...props} />;
});
export const TTitle600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='title' {...props} />;
});
export const TTitle700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='title' {...props} />;
});
export const TTitle800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='title' {...props} />;
});
export const TTitle900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='title' {...props} />;
});

/********************************************************************************************************************
 * TTitleLarge
 * ******************************************************************************************************************/

export const TTitleLarge = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLargeBold = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <TBold ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='titleLarge' {...props} />;
});
export const TTitleLarge900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='titleLarge' {...props} />;
});

/********************************************************************************************************************
 * THeadline
 * ******************************************************************************************************************/

export const THeadline = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='headline' {...props} />;
});
export const THeadlineBold = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <TBold ref={ref} s='headline' {...props} />;
});
export const THeadline100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='headline' {...props} />;
});
export const THeadline200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='headline' {...props} />;
});
export const THeadline300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='headline' {...props} />;
});
export const THeadline400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='headline' {...props} />;
});
export const THeadline500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='headline' {...props} />;
});
export const THeadline600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='headline' {...props} />;
});
export const THeadline700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='headline' {...props} />;
});
export const THeadline800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='headline' {...props} />;
});
export const THeadline900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='headline' {...props} />;
});

/********************************************************************************************************************
 * THeadlineLarge
 * ******************************************************************************************************************/

export const THeadlineLarge = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <T ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLargeBold = React.forwardRef<HTMLDivElement, SizeProps>((props, ref) => {
  return <TBold ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge100 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T100 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge200 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T200 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge300 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T300 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge400 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T400 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge500 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T500 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge600 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T600 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge700 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T700 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge800 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T800 ref={ref} s='headlineLarge' {...props} />;
});
export const THeadlineLarge900 = React.forwardRef<HTMLDivElement, SizeFontWeightProps>((props, ref) => {
  return <T900 ref={ref} s='headlineLarge' {...props} />;
});
