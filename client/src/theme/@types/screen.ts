/********************************************************************************************************************
 * 화면 크기
 * ‼️‼️‼️ 추가/삭제 시 반드시 src/sass 폴더의 theme-screen.scss 에 값을 변경해야 함 ‼️‼️‼️
 * ******************************************************************************************************************/

/********************************************************************************************************************
 * Alias
 * ******************************************************************************************************************/
export const ScreenAliases = {
  mobileSm: ['mobileSmMin', 'mobileSmMax'],
  mobileMd: ['mobileMdMin', 'mobileMdMax'],
  mobileLg: ['mobileLgMin', 'mobileLgMax'],
  tabletSm: ['tabletSmMin', 'tabletSmMax'],
  tabletMd: ['tabletMdMin', 'tabletMdMax'],
  tabletLg: ['tabletLgMin', 'tabletLgMax'],
  desktopSm: ['desktopSmMin', 'desktopSmMax'],
  desktopMd: ['desktopMdMin', 'desktopMdMax'],
  desktopLg: ['desktopLgMin', 'desktopLgMax'],
} as const;
export type ScreenAlias = keyof typeof ScreenAliases;

/********************************************************************************************************************
 * Min
 * ******************************************************************************************************************/
export const MinScreens = [
  'mobileSmMin',
  'mobileMdMin',
  'mobileLgMin',
  'tabletSmMin',
  'tabletMdMin',
  'tabletLgMin',
  'desktopSmMin',
  'desktopMdMin',
  'desktopLgMin',
] as const;
export type MinScreens = (typeof MinScreens)[number];

/********************************************************************************************************************
 * Max
 * ******************************************************************************************************************/
export const MaxScreens = [
  'mobileSmMax',
  'mobileMdMax',
  'mobileLgMax',
  'tabletSmMax',
  'tabletMdMax',
  'tabletLgMax',
  'desktopSmMax',
  'desktopMdMax',
  'desktopLgMax',
] as const;
export type MaxScreens = (typeof MaxScreens)[number];

/********************************************************************************************************************
 * All
 * ******************************************************************************************************************/

export const AllScreens = [...MinScreens, ...MaxScreens] as const;
export type AllScreens = (typeof AllScreens)[number];

/********************************************************************************************************************
 * ScreenSizeInfo : 반응형 화면 크기 정보 - 현재 화면 크기에 대한 정보 - AppContext 에서 사용
 * ******************************************************************************************************************/

export interface ScreenSizeInfo {
  // 현재 화면보다 작거나 같은 크기 별칭 배열
  sizes: ScreenAlias[];
  // 현재 화면 크기 별칭 맵
  is: Record<ScreenAlias | 'mobile' | 'tablet' | 'desktop', boolean>;
  // 현재 화면보다 작은 크기 별칭 맵
  smallerThan: Record<ScreenAlias, boolean>;
  // 현재 화면보다 작거나 같은 크기 별칭 맵
  smallerThanOrEqual: Record<ScreenAlias, boolean>;
  // 현재 화면보다 큰 크기 별칭 맵
  largerThan: Record<ScreenAlias, boolean>;
  // 현재 화면보다 크거나 같은 크기 별칭 맵
  largerThanOrEqual: Record<ScreenAlias, boolean>;
}
