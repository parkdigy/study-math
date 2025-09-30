import { FormControlCommands, FormControlCommonProps } from '../@common';

export type FormSelectSize = 'normal' | 'small';

export interface FormSelectCommands<T extends string | number> extends FormControlCommands {
  getValue: () => T | undefined;
  setValue: (value: T | undefined) => void;
}

export interface FormSelectItem<T extends string | number> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface FormSelectProps<T extends string | number> extends FormControlCommonProps<T | undefined> {
  // 사이즈
  size?: FormSelectSize;
  // 아이템 목록
  items?: FormSelectItem<T>[];
  // Placeholder
  placeholder?: string;
  // 로딩 여부
  loading?: boolean;
  // 검색 가능 여부
  searchable?: boolean;
  // 선택 해제 가능 여부
  clearable?: boolean;
  // 아이템이 없을 때 표시할 텍스트
  emptyItemText?: string;
  // 로딩 중일 때 아이템이 없을 때 표시할 텍스트
  loadingEmptyItemText?: string;
  // 포커스 이벤트
  onFocus?: () => void;
  // 블러 이벤트
  onBlur?: () => void;
}
