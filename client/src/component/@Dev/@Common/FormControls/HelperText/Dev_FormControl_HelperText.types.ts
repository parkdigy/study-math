import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';
import { FormTextProps } from '@ccomp';

export interface Dev_FormControl_HelperTextProps
  extends Pick<FormTextProps, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {}
