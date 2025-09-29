import { CSSProperties } from 'react';
import { FormRadioGroupProps } from '../../../../../@Common';
import { Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_IconSpacingProps
  extends Pick<FormRadioGroupProps<Exclude<CSSProperties['gap'], undefined>>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
