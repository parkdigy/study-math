import { AllColors, AllSizes, ButtonColors } from '@theme';
import { BoxProps } from '../../Layout';
import {
  CustomComponentBackgroundStyles,
  CustomComponentFlexStyles,
  CustomComponentFontStyles,
} from '../../CustomComponent';
import { CSSProperties } from 'react';

export interface IconButtonProps
  extends Omit<
    BoxProps,
    | 'size'
    | 'center'
    | 'centerJustify'
    | keyof CustomComponentFlexStyles
    | keyof CustomComponentFontStyles
    | keyof CustomComponentBackgroundStyles
  > {
  // 아이콘 이름 (Material Icons 이름 사용)
  children: IconProps['children'];
  // 스타일 (default: 기본(아이콘), rounded: 둥근)
  variant?: 'default' | 'rounded';
  // 색상
  color?: ButtonColors | CSSProperties['color'];
  // 배경 색상
  backgroundColor?: AllColors | CSSProperties['backgroundColor'];
  // 크기
  size?: AllSizes | number;
  // 아이콘 추가 속성
  iconProps?: Omit<IconProps, 'children' | 'color' | 'size' | 'backgroundColor'>;
  // 버튼 클릭 시 이동할 URL (내부 URL은 / 로 시작)
  url?: string;
  // 외부 URL 일 경우, 현재 탭에서 이동할지 여부
  externalUrlOpenInThisTab?: boolean;
  // 비활성 여부
  disabled?: boolean;
}
