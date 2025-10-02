import { FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export type Dev_FormControl_RotateValue = 90 | 180 | 270;

export interface Dev_FormControl_RotateProps
  extends Pick<FormRadioGroupProps<Dev_FormControl_RotateValue>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
