import { FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_SpacingProps
  extends Pick<FormRadioGroupProps<number>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
