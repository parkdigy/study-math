import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';
import { FormTextProps } from '@ccomp';

export interface Dev_FormControl_LabelProps
  extends Pick<FormTextProps, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {}
