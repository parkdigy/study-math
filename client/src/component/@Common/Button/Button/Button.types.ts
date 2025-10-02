import React, { CSSProperties } from 'react';
import { CustomComponentBackgroundStyles, CustomComponentProps } from '../../CustomComponent';
import { AllSizes, ButtonColors } from '@theme';

export interface ButtonProps
  extends Omit<
    CustomComponentProps<React.ButtonHTMLAttributes<HTMLButtonElement>>,
    'component' | 'style' | 'color' | 'fontSize' | keyof CustomComponentBackgroundStyles
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
  size?: AllSizes;
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
}
