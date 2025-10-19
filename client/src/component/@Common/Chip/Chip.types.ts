import { AllColors, AllSizes } from '@theme';
import { CustomComponentBorderStyles } from '../CustomComponent';
import { CSSProperties } from 'react';

export type ChipVariant = 'contained' | 'outlined';

export interface ChipProps
  extends Omit<FlexProps, 'children' | 'label' | 'fontSize' | keyof CustomComponentBorderStyles> {
  // 유형
  variant?: ChipVariant;
  // 내용
  label: ReactNode;
  // 크기
  size?: AllSizes;
  // 글자 크기
  fontSize?: number;
  // 테두리
  border?: CSSProperties['border'];
  borderWidth?: CSSProperties['borderWidth'];
  borderStyle?: CSSProperties['borderStyle'];
  borderColor?: AllColors | CSSProperties['borderColor'];
  borderRadius?: CSSProperties['borderRadius'];
  // 삭제 버튼 클릭 이벤트
  onRemoveClick?: () => void;
}
