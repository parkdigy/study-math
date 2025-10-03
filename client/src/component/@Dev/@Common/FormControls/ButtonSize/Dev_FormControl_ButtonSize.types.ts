import { ButtonSizes, FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_ButtonSizeProps
  extends Pick<FormRadioGroupProps<ButtonSizes>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
