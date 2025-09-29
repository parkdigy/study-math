import React from 'react';

export interface FormSelectInputCommands {
  focus: () => void;
  clearValue: () => void;
}

export interface FormSelectInputProps {
  id: string;
  show: boolean;
  itemLabel: string | undefined;
  placeholder: string | undefined;
  disabled: boolean | undefined;
  loading: boolean | undefined;
  isOpenDropdown: boolean;
  error: boolean;
  searchable: boolean | undefined;
  clearable: boolean | undefined;
  onNextItem: () => void;
  onPrevItem: () => void;
  onEnter: () => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChangeValue: (value: string) => void;
  onClear: () => void;
  onCommands: (commands: FormSelectInputCommands) => void;
}
