/********************************************************************************************************************
 * 화면 크기
 * ‼️‼️‼️ 추가/삭제 시 반드시 src/sass 폴더의 theme-screen.scss 에 값을 변경해야 함 ‼️‼️‼️
 * ******************************************************************************************************************/

/********************************************************************************************************************
 * Alias
 * ******************************************************************************************************************/
export const MobileScreenAliases = {
  mobile: ['mobileMin', 'mobileMax'],
  mobileSm: ['mobileSmMin', 'mobileSmMax'],
  mobileMd: ['mobileMdMin', 'mobileMdMax'],
  mobileLg: ['mobileLgMin', 'mobileLgMax'],
} as const;
export type MobileScreenAlias = keyof typeof MobileScreenAliases;

export const TabletScreenAliases = {
  tablet: ['tabletMin', 'tabletMax'],
  tabletSm: ['tabletSmMin', 'tabletSmMax'],
  tabletMd: ['tabletMdMin', 'tabletMdMax'],
  tabletLg: ['tabletLgMin', 'tabletLgMax'],
} as const;
export type TabletScreenAlias = keyof typeof TabletScreenAliases;

export const DesktopScreenAliases = {
  desktop: ['desktopMin', 'desktopMax'],
  desktopSm: ['desktopSmMin', 'desktopSmMax'],
  desktopMd: ['desktopMdMin', 'desktopMdMax'],
  desktopLg: ['desktopLgMin', 'desktopLgMax'],
} as const;
export type DesktopScreenAlias = keyof typeof DesktopScreenAliases;

export const AllScreenAliases = {
  ...MobileScreenAliases,
  ...TabletScreenAliases,
  ...DesktopScreenAliases,
};
export type AllScreenAliases = keyof typeof AllScreenAliases;

/********************************************************************************************************************
 * Min
 * ******************************************************************************************************************/
export const MobileMinScreens = ['mobileMin', 'mobileSmMin', 'mobileMdMin', 'mobileLgMin'] as const;
export type MobileMinScreens = (typeof MobileMinScreens)[number];

export const TabletMinScreens = ['tabletMin', 'tabletSmMin', 'tabletMdMin', 'tabletLgMin'] as const;
export type TabletMinScreens = (typeof TabletMinScreens)[number];

export const DesktopMinScreens = ['desktopMin', 'desktopSmMin', 'desktopMdMin', 'desktopLgMin'] as const;
export type DesktopMinScreens = (typeof DesktopMinScreens)[number];

export const AllMinScreens = [...MobileMinScreens, ...TabletMinScreens, ...DesktopMinScreens];
export type AllMinScreens = (typeof AllMinScreens)[number];

/********************************************************************************************************************
 * Max
 * ******************************************************************************************************************/
export const MobileMaxScreens = ['mobileMax', 'mobileSmMax', 'mobileMdMax', 'mobileLgMax'] as const;
export type MobileMaxScreens = (typeof MobileMaxScreens)[number];

export const TabletMaxScreens = ['tabletMax', 'tabletSmMax', 'tabletMdMax', 'tabletLgMax'] as const;
export type TabletMaxScreens = (typeof TabletMaxScreens)[number];

export const DesktopMaxScreens = ['desktopMax', 'desktopSmMax', 'desktopMdMax', 'desktopLgMax'] as const;
export type DesktopMaxScreens = (typeof DesktopMaxScreens)[number];

export const AllMaxScreens = [...MobileMaxScreens, ...TabletMaxScreens, ...DesktopMaxScreens];
export type AllMaxScreens = (typeof AllMaxScreens)[number];

/********************************************************************************************************************
 * General
 * ******************************************************************************************************************/

export const GeneralScreens = ['mobile', 'tablet', 'desktop'] as const;
export type GeneralScreens = (typeof GeneralScreens)[number];

/********************************************************************************************************************
 * All
 * ******************************************************************************************************************/

export const MobileAllScreens = [...MobileMinScreens, ...MobileMaxScreens] as const;
export type MobileAllScreens = (typeof MobileAllScreens)[number];

export const TabletAllScreens = [...TabletMinScreens, ...TabletMaxScreens] as const;
export type TabletAllScreens = (typeof TabletAllScreens)[number];

export const DesktopAllScreens = [...DesktopMinScreens, ...DesktopMaxScreens] as const;
export type DesktopAllScreens = (typeof DesktopAllScreens)[number];

export const AllScreens = [...MobileAllScreens, ...TabletAllScreens, ...DesktopAllScreens] as const;
export type AllScreens = (typeof AllScreens)[number];

/********************************************************************************************************************
 * ScreenSizeInfo : 반응형 화면 크기 정보 - 현재 화면 크기에 대한 정보 - AppContext 에서 사용
 * ******************************************************************************************************************/

export type ScreenSizeInfoIsKey = AllScreenAliases | 'mobile' | 'tablet' | 'desktop';
export type ScreenSizeInfoSmallerThanKey = AllScreenAliases | 'tablet' | 'desktop';
export type ScreenSizeInfoSmallerThanOrEqualKey = AllScreenAliases | 'mobile' | 'tablet' | 'desktop';
export type ScreenSizeInfoLargerThanKey = AllScreenAliases | 'mobile' | 'tablet';
export type ScreenSizeInfoLargerThanOrEqualKey = AllScreenAliases | 'mobile' | 'tablet' | 'desktop';

export interface ScreenSizeInfo {
  // 현재 화면보다 작거나 같은 크기 별칭 배열
  sizes: AllScreenAliases[];
  // 현재 화면 크기 별칭 맵
  is: Record<ScreenSizeInfoIsKey, boolean>;
  // 현재 화면보다 작은 크기 별칭 맵
  smallerThan: Record<ScreenSizeInfoSmallerThanKey, boolean>;
  // 현재 화면보다 작거나 같은 크기 별칭 맵
  smallerThanOrEqual: Record<ScreenSizeInfoSmallerThanOrEqualKey, boolean>;
  // 현재 화면보다 큰 크기 별칭 맵
  largerThan: Record<ScreenSizeInfoLargerThanKey, boolean>;
  // 현재 화면보다 크거나 같은 크기 별칭 맵
  largerThanOrEqual: Record<ScreenSizeInfoLargerThanOrEqualKey, boolean>;
}
