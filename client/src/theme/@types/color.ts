/********************************************************************************************************************
 * ‼️‼️‼️ 추가/삭제 시 반드시 src/sass 폴더의 theme-dark.scss, theme-light.scss, src/sass/_color.scss 에 값을 변경해야 함 ‼️‼️‼️
 * ******************************************************************************************************************/

/********************************************************************************************************************
 * 기본 컬러
 * ******************************************************************************************************************/
export const DefaultColors = ['primary', 'secondary', 'success', 'warning', 'error'] as const;
export type DefaultColors = (typeof DefaultColors)[number];

/********************************************************************************************************************
 * 기본 On 컬러
 * ******************************************************************************************************************/
export const DefaultOnColors = ['onPrimary', 'onSecondary', 'onSuccess', 'onWarning', 'onError'] as const;
export type DefaultOnColors = (typeof DefaultOnColors)[number];

export function getDefaultOnColor(color: DefaultColors): DefaultOnColors {
  return `on${color.charAt(0).toUpperCase()}${color.slice(1)}` as unknown as DefaultOnColors;
}

/********************************************************************************************************************
 * 텍스트 컬러
 * ******************************************************************************************************************/
export const TextColors = ['text', 'textAccent', 'textLighten', 'textBlurry'] as const;
export type TextColors = (typeof TextColors)[number];

/********************************************************************************************************************
 * 폼 컬러
 * ******************************************************************************************************************/
export const FormColors = [
  'formPrimary',
  'formOnPrimary',
  'formError',
  'formOnError',
  'formText',
  'formBorder',
  'formBackground',
  'formDisabledText',
  'formDisabledBorder',
  'formDisabledBackground',
  'formPlaceholder',
] as const;
export type FormColors = (typeof FormColors)[number];

/********************************************************************************************************************
 * 기타 컬러
 * ******************************************************************************************************************/
export const EtcColors = ['background', 'panelBackground', 'dialogBackdrop', 'divider'] as const;
export type EtcColors = (typeof EtcColors)[number];

/********************************************************************************************************************
 * 투명도 컬러
 * ******************************************************************************************************************/
export const OpacityColors = [
  'opacity01',
  'opacity02',
  'opacity03',
  'opacity04',
  'opacity05',
  'opacity06',
  'opacity07',
  'opacity08',
  'opacity09',
  'opacity10',
  'opacity15',
  'opacity20',
  'opacity25',
  'opacity30',
  'opacity35',
  'opacity40',
  'opacity45',
  'opacity50',
  'opacity55',
  'opacity60',
  'opacity65',
  'opacity70',
  'opacity75',
  'opacity80',
  'opacity85',
  'opacity90',
  'opacity95',
] as const;
export type OpacityColors = (typeof OpacityColors)[number];

/********************************************************************************************************************
 * 투명도 반전 컬러
 * ******************************************************************************************************************/
export const OpacityReverseColors = [
  'opacityReverse02',
  'opacityReverse03',
  'opacityReverse04',
  'opacityReverse05',
  'opacityReverse06',
  'opacityReverse07',
  'opacityReverse08',
  'opacityReverse09',
  'opacityReverse10',
  'opacityReverse15',
  'opacityReverse20',
  'opacityReverse25',
  'opacityReverse30',
  'opacityReverse35',
  'opacityReverse40',
  'opacityReverse45',
  'opacityReverse50',
  'opacityReverse55',
  'opacityReverse60',
  'opacityReverse65',
  'opacityReverse70',
  'opacityReverse75',
  'opacityReverse80',
  'opacityReverse85',
  'opacityReverse90',
  'opacityReverse95',
] as const;
export type OpacityReverseColors = (typeof OpacityReverseColors)[number];

/********************************************************************************************************************
 * 버튼에서 사용할 컬러
 * ******************************************************************************************************************/
export const ButtonColors = [...DefaultColors, ...TextColors, ...OpacityColors] as const;
export type ButtonColors = (typeof ButtonColors)[number];

/********************************************************************************************************************
 * 전체 컬러
 * ******************************************************************************************************************/
export const AllColors = [
  ...DefaultColors,
  ...DefaultOnColors,
  ...TextColors,
  ...OpacityColors,
  ...OpacityReverseColors,
  ...FormColors,
  ...EtcColors,
] as const;
export type AllColors = (typeof AllColors)[number];
