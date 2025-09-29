import { FormRadioGroupProps } from '../../../../../@Common';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_IconButtonVariantProps
  extends Pick<FormRadioGroupProps<Exclude<IconButtonProps['variant'], undefined>>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
