import { AlertType, FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_AlertTypeProps
  extends Pick<FormRadioGroupProps<AlertType>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
