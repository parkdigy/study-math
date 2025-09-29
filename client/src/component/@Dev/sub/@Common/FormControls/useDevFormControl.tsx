import {
  Dev_FormOptionsControlPropsMap,
  Dev_FormOptionsData,
  Dev_FormOptionsOption,
  Dev_FormOptionsProps,
} from '../FormOptions';
import { ScreenSizeInfo } from '@theme';
import React from 'react';
import { Dev_FormControl_ButtonVariant } from './ButtonVariant';
import { Dev_FormControl_IconButtonVariant } from './IconButtonVariant';
import { Dev_FormControl_AlertType } from './AlertType';
import { Dev_FormControl_Color } from './Color';
import { Dev_FormControl_BackgroundColor } from './BackgroundColor';
import { Dev_FormControl_Size } from './Size';
import { Dev_FormControl_FontWeight } from './FontWeight';
import { Dev_FormControl_Rotate } from './Rotate';
import { Dev_FormControl_Spacing } from './Spacing';
import { Dev_FormControl_Icon } from './Icon';
import { Dev_FormControl_IconPosition } from './IconPosition';
import { Dev_FormControl_IconSpacing } from './IconSpacing';
import { Dev_FormControl_Title } from './Title';
import { Dev_FormControl_Url } from './Url';
import { Dev_FormControl_Loading } from './Loading';
import { Dev_FormControl_Disabled } from './Disabled';
import { Dev_FormControl_Reverse } from './Reverse';
import { Dev_FormControl_ShowIcon } from './ShowIcon';
import { Dev_FormControl_TooltipPlace } from './TooltipPlace';
import { Dev_FormControl_Message } from './Message';
import { Dev_FormControl_OnRetry } from './OnRetry';
import { Dev_FormControl_Placeholder } from './Placeholder';
import { Dev_FormControl_Required } from './Required';
import { Dev_FormControl_HideTitle } from './HideTitle';
import { Dev_FormControl_SubControl } from './SubControl';
import { Dev_FormControl_Rules } from './Rules';
import { Dev_FormControl_Rows } from './Rows';
import { Dev_FormControl_Clearable } from './Clearable';

export type UseDevFormControlData<TOption extends Exclude<Dev_FormOptionsOption, 'cols'>> = {
  screenSize: ScreenSizeInfo;
  props?: Dev_FormOptionsControlPropsMap[TOption];
} & Required<
  Pick<
    Dev_FormOptionsProps,
    'colors' | 'backgroundColors' | 'multiOptionControlType' | 'selectControlOptions' | 'disabledOptions'
  >
>;

function useDevFormControl<TOption extends Exclude<Dev_FormOptionsOption, 'cols'>>(
  option: TOption,
  isUse: boolean,
  defaultValue: Dev_FormOptionsData[TOption],
  data: UseDevFormControlData<TOption>
): [Dev_FormOptionsData[TOption], React.ReactNode] {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState<Dev_FormOptionsData[TOption]>(defaultValue);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const defaultProps = isUse
    ? {
        disabled: data.disabledOptions.includes(option),
        value: value as any,
        onChange: setValue as any,
        ...data.props,
      }
    : {};

  const multiOptionDefaultProps = isUse
    ? {
        variant: data.screenSize.smallerThanOrEqual.tabletSm
          ? 'select'
          : data.selectControlOptions.includes(option as any)
            ? 'select'
            : data.multiOptionControlType,
        ...defaultProps,
      }
    : {};

  /********************************************************************************************************************
   * Control
   * ******************************************************************************************************************/

  const control = !isUse ? null : /** Multi Option Controls */ option === 'buttonVariant' ? (
    <Dev_FormControl_ButtonVariant {...multiOptionDefaultProps} />
  ) : option === 'iconButtonVariant' ? (
    <Dev_FormControl_IconButtonVariant {...multiOptionDefaultProps} />
  ) : option === 'alertType' ? (
    <Dev_FormControl_AlertType {...multiOptionDefaultProps} />
  ) : option === 'color' ? (
    <Dev_FormControl_Color colors={data.colors} {...multiOptionDefaultProps} />
  ) : option === 'backgroundColor' ? (
    <Dev_FormControl_BackgroundColor colors={data.backgroundColors} {...multiOptionDefaultProps} />
  ) : option === 'size' ? (
    <Dev_FormControl_Size {...multiOptionDefaultProps} />
  ) : option === 'fontWeight' ? (
    <Dev_FormControl_FontWeight {...multiOptionDefaultProps} />
  ) : option === 'tooltipPlace' ? (
    <Dev_FormControl_TooltipPlace {...multiOptionDefaultProps} />
  ) : option === 'rotate' ? (
    <Dev_FormControl_Rotate {...multiOptionDefaultProps} />
  ) : option === 'spacing' ? (
    <Dev_FormControl_Spacing {...multiOptionDefaultProps} />
  ) : option === 'icon' ? (
    <Dev_FormControl_Icon {...multiOptionDefaultProps} />
  ) : option === 'iconPosition' ? (
    <Dev_FormControl_IconPosition {...multiOptionDefaultProps} />
  ) : option === 'iconSpacing' ? (
    <Dev_FormControl_IconSpacing {...multiOptionDefaultProps} />
  ) : option === 'rows' ? (
    <Dev_FormControl_Rows {...multiOptionDefaultProps} />
  ) : /** Text Controls */ option === 'title' ? (
    <Dev_FormControl_Title {...defaultProps} />
  ) : option === 'placeholder' ? (
    <Dev_FormControl_Placeholder {...defaultProps} />
  ) : option === 'url' ? (
    <Dev_FormControl_Url {...defaultProps} />
  ) : option === 'message' ? (
    <Dev_FormControl_Message {...defaultProps} />
  ) : /** Boolean Controls */ option === 'loading' ? (
    <Dev_FormControl_Loading {...defaultProps} />
  ) : option === 'disabled' ? (
    <Dev_FormControl_Disabled {...defaultProps} />
  ) : option === 'reverse' ? (
    <Dev_FormControl_Reverse {...defaultProps} />
  ) : option === 'required' ? (
    <Dev_FormControl_Required {...defaultProps} />
  ) : option === 'showIcon' ? (
    <Dev_FormControl_ShowIcon {...defaultProps} />
  ) : option === 'onRetry' ? (
    <Dev_FormControl_OnRetry {...defaultProps} />
  ) : option === 'hideTitle' ? (
    <Dev_FormControl_HideTitle {...defaultProps} />
  ) : option === 'subControl' ? (
    <Dev_FormControl_SubControl {...defaultProps} />
  ) : option === 'rules' ? (
    <Dev_FormControl_Rules {...defaultProps} />
  ) : option === 'clearable' ? (
    <Dev_FormControl_Clearable {...defaultProps} />
  ) : null;

  /********************************************************************************************************************
   * Return
   * ******************************************************************************************************************/

  return [value, control];
}

export default useDevFormControl;
