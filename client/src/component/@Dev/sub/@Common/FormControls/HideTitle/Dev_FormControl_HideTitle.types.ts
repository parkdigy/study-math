import { FormCheckboxProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_HideTitleProps
  extends Pick<FormCheckboxProps, 'checked' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  value?: boolean;
}
