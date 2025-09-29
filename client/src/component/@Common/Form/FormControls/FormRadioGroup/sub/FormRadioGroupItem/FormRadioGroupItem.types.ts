export interface FormRadioGroupItemCommands {
  focus: () => void;
}

export interface FormRadioGroupItemProps<T extends string | number | boolean> {
  label: ReactNode;
  value: T;
  itemsKey: number;
  active: boolean;
  disabled?: boolean;
  error?: boolean;
  onClick: (value: T) => void;
  onChangeWidth?: (width: number) => void;
  onCommands?: (commands: FormRadioGroupItemCommands) => void;
}
