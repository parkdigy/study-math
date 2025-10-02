import { FormSelectItem } from '../../FormSelect.types';

export interface FormSelectDropdownCommands<T extends string | number> {
  prevItem: () => void;
  nextItem: () => void;
  getTempActiveItem: () => FormSelectItem<T> | undefined;
  setSearchKeyword: (keyword: string) => void;
}

export interface FormSelectDropdownProps<T extends string | number> {
  id: string;
  isOpen: boolean;
  searchable: boolean | undefined;
  loading: boolean | undefined;
  items: FormSelectItem<T>[] | undefined;
  activeItem: FormSelectItem<T> | undefined;
  emptyItemText: string | undefined;
  loadingEmptyItemText: string | undefined;
  onClick: (item: FormSelectItem<T>) => void;
  onCommands: (commands: FormSelectDropdownCommands<T>) => void;
}
