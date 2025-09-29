import { FormRadioGroupProps } from '../../../../../@Common';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_IconProps
  extends Pick<FormRadioGroupProps<string>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
