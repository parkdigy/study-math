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
    | 'autoComplete'
    | 'autoCapitalize'
    | 'autoCorrect'
    | 'onChange'
    | 'onFocus'
    | 'onBlur'
    | 'onKeyUp'
    | 'onKeyDown'
    | 'onPaste'
  > {
  error: boolean;
  clear?: boolean;
  endAdornment?: ReactNode;
  onClearClick: () => void;
}
