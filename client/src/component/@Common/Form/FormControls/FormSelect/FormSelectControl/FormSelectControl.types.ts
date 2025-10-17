import { FormSelectItem, FormSelectSize } from '../FormSelect.types';

export interface FormSelectControlCommands {
  focus: () => void;
}

export interface FormSelectControlProps<T extends string | number> {
  size: FormSelectSize;
  loading: boolean | undefined;
  disabled: boolean;
  searchable: boolean | undefined;
  clearable: boolean | undefined;
  placeholder: string | undefined;
  error: boolean;
  itemLabel: string | undefined;
  items: FormSelectItem<T>[] | undefined;
  activeItem: FormSelectItem<T> | undefined;
  emptyItemText: string | undefined;
  loadingEmptyItemText: string | undefined;
  onActiveItem: (item: FormSelectItem<T> | undefined) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onOpenDropdown?: () => boolean; // 드롭다운 열기 전 이벤트 (true 반환 시 드롭다운 열리지 않음)
  onCommands: (commands: FormSelectControlCommands) => void;
}
