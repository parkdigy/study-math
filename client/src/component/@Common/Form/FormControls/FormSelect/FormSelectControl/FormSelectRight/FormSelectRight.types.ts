import { FormSelectSize } from '../../FormSelect.types';

export interface FormSelectRightProps {
  // 사이즈
  size: FormSelectSize;
  // 포커스 여부
  isFocused: boolean;
  // 드롭다운 오픈 여부
  isOpenDropdown: boolean;
  // 로딩 여부
  loading: boolean | undefined;
  // 클리어 버튼 표시 여부
  showClear: boolean;
  // 클리어 가능 여부
  clearable: boolean | undefined;
  // 클리어 이벤트
  onClear: () => void;
}
