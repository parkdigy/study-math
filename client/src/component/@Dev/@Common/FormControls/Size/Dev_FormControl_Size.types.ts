import { FriendlyNameSizes } from '@theme';
import { FormRadioGroupProps } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_SizeProps
  extends Pick<FormRadioGroupProps<FriendlyNameSizes>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
