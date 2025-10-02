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
  onCommands: (commands: FormSelectControlCommands) => void;
}
