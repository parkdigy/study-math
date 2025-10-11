import React, { CSSProperties } from 'react';
import {
  CustomComponentBackgroundStyles,
  CustomComponentBorderStyles,
  CustomComponentProps,
} from '../../CustomComponent';
import { AllColors, ButtonColors } from '@theme';

export const ButtonSizes = {
  xs: {
    fontSize: { contained: 12, outlined: 12, text: 12 },
    fontWeight: { contained: 700, outlined: 600, text: 400 },
    lineHeight: { contained: 1.2, outlined: 1.2, text: 1.2 },
    height: { contained: 28, outlined: 28, text: 'auto' },
    borderRadius: { contained: 5, outlined: 5, text: 0 },
    paddingHorizontal: { contained: 10, outlined: 10, text: 0 },
  },
  sm: {
    fontSize: { contained: 14, outlined: 14, text: 14 },
    fontWeight: { contained: 700, outlined: 600, text: 400 },
    lineHeight: { contained: 1.6, outlined: 1.6, text: 1.6 },
    height: { contained: 32, outlined: 32, text: 'auto' },
    borderRadius: { contained: 5, outlined: 5, text: 0 },
    paddingHorizontal: { contained: 15, outlined: 15, text: 0 },
  },
  md: {
    fontSize: { contained: 16, outlined: 16, text: 16 },
    fontWeight: { contained: 700, outlined: 600, text: 400 },
    lineHeight: { contained: 1.6, outlined: 1.6, text: 1.6 },
    height: { contained: 42, outlined: 42, text: 'auto' },
    borderRadius: { contained: 7, outlined: 7, text: 0 },
    paddingHorizontal: { contained: 20, outlined: 20, text: 0 },
  },
  lg: {
    fontSize: { contained: 16, outlined: 16, text: 16 },
    fontWeight: { contained: 700, outlined: 600, text: 400 },
    lineHeight: { contained: 1.6, outlined: 1.6, text: 1.6 },
    height: { contained: 56, outlined: 56, text: 'auto' },
    borderRadius: { contained: 10, outlined: 10, text: 0 },
    paddingHorizontal: { contained: 25, outlined: 25, text: 0 },
  },
  xl: {
    fontSize: { contained: 20, outlined: 20, text: 20 },
    fontWeight: { contained: 700, outlined: 600, text: 400 },
    lineHeight: { contained: 1.4, outlined: 1.4, text: 1.4 },
    height: { contained: 70, outlined: 70, text: 'auto' },
    borderRadius: { contained: 10, outlined: 10, text: 0 },
    paddingHorizontal: { contained: 30, outlined: 30, text: 0 },
  },
} as const;
export type ButtonSizes = keyof typeof ButtonSizes;

export type ButtonHtmlProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps
  extends Omit<
    CustomComponentProps<ButtonHtmlProps>,
    | 'component'
    | 'style'
    | 'color'
    | 'fontSize'
    | keyof CustomComponentBackgroundStyles
    | keyof CustomComponentBorderStyles
  > {
  // 스타일 (contained: 채워진 버튼, outlined: 테두리만 있는 버튼, text: 텍스트 버튼)
  variant?: 'contained' | 'outlined' | 'text';
  // 색상
  color?: ButtonColors | CSSProperties['color'];
  // 배경 색상 (커스텀 색상 사용 시에만 사용)
  backgroundColor?: CSSProperties['backgroundColor'];
  // 색상 반전 (variant 가 contained 일 때만 적용됨)
  reverse?: boolean;
  // 크기
  size?: ButtonSizes;
  // 로딩 여부
  loading?: boolean;
  // 버튼 크기가 라벨보다 작을 경우, 줄바꿈 할지 여부
  wrapLabel?: boolean;
  // 텍스트 사이즈
  fontSize?: number;
  // 밑줄
  underline?: boolean;
  // 아이콘 이름 (Material Icons 이름 사용)
  icon?: string;
  // 아이콘과 텍스트 사이 간격
  iconSpacing?: CSSProperties['gap'];
  // 아이콘 위치 (start: 텍스트 앞, end: 텍스트 뒤)
  iconPosition?: 'start' | 'end';
  // 아이콘 추가 속성
  iconProps?: Omit<IconProps, 'children'>;
  // 버튼 클릭 시 이동할 URL (내부 URL은 / 로 시작)
  url?: string;
  // 외부 URL 일 경우, 현재 탭에서 이동할지 여부
  externalUrlOpenInThisTab?: boolean;
  // 테두리
  border?: CSSProperties['border'];
  borderWidth?: CSSProperties['borderWidth'];
  borderStyle?: CSSProperties['borderStyle'];
  borderColor?: AllColors | CSSProperties['borderColor'];
  borderRadius?: CSSProperties['borderRadius'];
}
