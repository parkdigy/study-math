import { FormControlCommands } from '../FormControls/@common';

export interface FormCommands {
  submit: () => void;
  focus: (name: string) => void;
  getControlCommands: <T extends FormControlCommands>(name: string) => T | undefined;
}

export interface FormProps extends Omit<FlexProps, 'ref' | 'onSubmit'> {
  titlePosition?: 'top' | 'left';
  titleWidth?: number;
  hideTitle?: boolean;
  focusName?: string;
  disabled?: boolean;
  // 구현부에서 관대한 타입을 허용하기 위해서
  // onSubmit?: (values) => void 를 사용하지 않고,
  // onSubmit?(values): void 로 사용
  // 예) const handleSubmit = (values: { name: string; age: number }) => { ... }
  onSubmit?(values: Dict<string | number | boolean | File | undefined>, target: HTMLFormElement): void;
}
