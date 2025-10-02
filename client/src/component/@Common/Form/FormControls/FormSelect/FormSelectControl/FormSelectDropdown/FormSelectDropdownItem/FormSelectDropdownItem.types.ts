import { FormSelectItem } from '../../../FormSelect.types';

export interface FormSelectDropdownItemProps<T extends string | number> {
  id: string;
  info: FormSelectItem<T>;
  active: boolean;
  tempActive: boolean;
  onActive: (info: FormSelectItem<T>) => void;
  onClick: (info: FormSelectItem<T>) => void;
}
