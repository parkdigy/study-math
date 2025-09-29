/********************************************************************************************************************
 * ‼️‼️‼️ 추가/삭제 시 반드시 src/sass 폴더의 theme-size.scss 에 값을 변경해야 함 ‼️‼️‼️
 * ******************************************************************************************************************/

/********************************************************************************************************************
 * Sizes
 * ******************************************************************************************************************/
export const Sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'x2l', 'x3l', 'x4l', 'x5l'] as const;
export type Sizes = (typeof Sizes)[number];

/********************************************************************************************************************
 * FriendlyNameSizes
 * ******************************************************************************************************************/
export const FriendlyNameSizes = [
  'caption',
  'bodySmall',
  'body',
  'bodyLarge',
  'titleSmall',
  'title',
  'titleLarge',
  'headline',
  'headlineLarge',
] as const;
export type FriendlyNameSizes = (typeof FriendlyNameSizes)[number];

/********************************************************************************************************************
 * AllSizes
 * ******************************************************************************************************************/
export const AllSizes = [...Sizes, ...FriendlyNameSizes] as const;
export type AllSizes = (typeof AllSizes)[number];

/********************************************************************************************************************
 * getSizeOfFriendlyName
 * ******************************************************************************************************************/
export function getFriendlyNameOfSize(size: Sizes): FriendlyNameSizes {
  switch (size) {
    case 'xs':
      return 'caption';
    case 'sm':
      return 'bodySmall';
    case 'md':
      return 'body';
    case 'lg':
      return 'bodyLarge';
    case 'xl':
      return 'titleSmall';
    case 'x2l':
      return 'title';
    case 'x3l':
      return 'titleLarge';
    case 'x4l':
      return 'headline';
    case 'x5l':
      return 'headlineLarge';
    default:
      return 'body';
  }
}

export function getSizeOfFriendlyName(friendlyName: FriendlyNameSizes): Sizes {
  switch (friendlyName) {
    case 'caption':
      return 'xs';
    case 'bodySmall':
      return 'sm';
    case 'body':
      return 'md';
    case 'bodyLarge':
      return 'lg';
    case 'titleSmall':
      return 'xl';
    case 'title':
      return 'x2l';
    case 'titleLarge':
      return 'x3l';
    case 'headline':
      return 'x4l';
    case 'headlineLarge':
      return 'x5l';
  }
}

/********************************************************************************************************************
 * SizeInfo
 * ******************************************************************************************************************/
export interface SizeInfo {
  fontSize: number;
  lineHeight: number;
}

export interface SizeCssVarNameInfo {
  fontSize: string;
  lineHeight: string;
}
