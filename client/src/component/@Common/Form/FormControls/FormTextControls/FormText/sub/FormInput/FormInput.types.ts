import { HTMLProps } from 'react';

export interface FormInputProps
  extends Pick<
    HTMLProps<HTMLInputElement>,
    | 'type'
    | 'name'
    | 'disabled'
    | 'value'
    | 'placeholder'
    | 'formNoValidate'
    | 'maxLength'
    | 'onChange'
    | 'onFocus'
    | 'onBlur'
    | 'onKeyUp'
    | 'onKeyDown'
  > {
  error: boolean;
  clear?: boolean;
  endAdornment?: ReactNode;
  onClearClick: () => void;
}
