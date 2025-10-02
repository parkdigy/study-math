import { FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_MessageProps
  extends Pick<FormRadioGroupProps<string>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {}
