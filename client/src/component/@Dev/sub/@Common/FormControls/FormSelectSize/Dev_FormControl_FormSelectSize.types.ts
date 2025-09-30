import { FormSelectSize, FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_FormSelectSizeProps
  extends Pick<FormRadioGroupProps<FormSelectSize>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
