import { FormCheckboxProps, FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_FormCheckboxTypeProps
  extends Pick<FormRadioGroupProps<Exclude<FormCheckboxProps['type'], undefined>>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
