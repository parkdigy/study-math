import { FormRadioGroupProps, ListVariant } from '@ccomp';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_ListVariantProps
  extends Pick<FormRadioGroupProps<ListVariant>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
