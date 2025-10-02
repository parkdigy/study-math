import { FormRadioGroupType } from '../FormRadioGroup.types';

export interface FormRadioGroupItemCommands {
  focus: () => void;
}

export interface FormRadioGroupItemProps<T extends string | number | boolean> {
  type: FormRadioGroupType;
  label: ReactNode;
  value: T;
  itemsKey: number;
  active: boolean;
  disabled?: boolean;
  error?: boolean;
  buttonWidth?: number;
  buttonFullWidth?: boolean;
  onClick: (value: T) => void;
  onChangeWidth?: (width: number) => void;
  onCommands?: (commands: FormRadioGroupItemCommands) => void;
}
