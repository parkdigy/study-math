import { FormControlCommands, FormControlCommonProps } from '../@common';

export type FormRadioGroupType = 'radio' | 'button' | 'smallButton';

export interface FormRadioGroupCommands<T extends string | number | boolean> extends FormControlCommands {
  getValue: () => T | undefined;
  setValue: (value: T | undefined) => void;
}

export type FormRadioGroupItemInfo<T extends string | number | boolean> = Lv<ReactNode, T, { disabled?: boolean }>;

export interface FormRadioGroupProps<T extends string | number | boolean>
  extends Omit<FormControlCommonProps<T | undefined>, 'subControl'> {
  type?: FormRadioGroupType;
  items: FormRadioGroupItemInfo<T>[];
  spacing?: number;
  grid?: GridProps;
}
