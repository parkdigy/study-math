import {
  Dev_FormControl_AlertTypeProps,
  Dev_FormControl_BackgroundColorProps,
  Dev_FormControl_ButtonVariantProps,
  Dev_FormControl_ClearableProps,
  Dev_FormControl_ColorProps,
  Dev_FormControl_CurrentPageProps,
  Dev_FormControl_DisabledProps,
  Dev_FormControl_FontWeightProps,
  Dev_FormControl_FormCheckboxTypeProps,
  Dev_FormControl_FormRadioGroupTypeProps,
  Dev_FormControl_FormSelectSizeProps,
  Dev_FormControl_HelperTextProps,
  Dev_FormControl_HideTitleProps,
  Dev_FormControl_IconButtonVariantProps,
  Dev_FormControl_IconPositionProps,
  Dev_FormControl_IconProps,
  Dev_FormControl_IconSpacingProps,
  Dev_FormControl_LastPageProps,
  Dev_FormControl_LoadingProps,
  Dev_FormControl_MessageProps,
  Dev_FormControl_OnRetryProps,
  Dev_FormControl_PlaceholderProps,
  Dev_FormControl_RequiredProps,
  Dev_FormControl_ReverseProps,
  Dev_FormControl_RotateProps,
  Dev_FormControl_RowsProps,
  Dev_FormControl_RulesProps,
  Dev_FormControl_ShowIconProps,
  Dev_FormControl_SizeProps,
  Dev_FormControl_SpacingProps,
  Dev_FormControl_SubControlProps,
  Dev_FormControl_TitleProps,
  Dev_FormControl_TooltipPlaceProps,
  Dev_FormControl_UrlProps,
} from '../FormControls';
import { Dev_CodeProps } from '../Code';
import { AllColors } from '@theme';
import { FormControlCommonProps, FormProps, GridProps } from '@ccomp';
import { Dev_FormControl_LabelProps } from '../FormControls/Label';
import { CSSProperties } from 'react';
import { Dev_FormControl_SearchableProps } from '../FormControls/Searchable';

export type Dev_FormOptionsOption =
  /** Multi Option Controls */
  | 'buttonVariant'
  | 'iconButtonVariant'
  | 'alertType'
  | 'color'
  | 'backgroundColor'
  | 'fontWeight'
  | 'tooltipPlace'
  | 'rotate'
  | 'icon'
  | 'iconPosition'
  | 'iconSpacing'
  | 'size'
  | 'spacing'
  | 'rows'
  | 'formCheckboxType'
  | 'formRadioGroupType'
  | 'formSelectSize'
  | 'currentPage'
  | 'lastPage'
  /** Text Controls */
  | 'url'
  | 'title'
  | 'message'
  | 'placeholder'
  | 'helperText'
  | 'label'
  /** Boolean Controls */
  | 'disabled'
  | 'loading'
  | 'reverse'
  | 'required'
  | 'showIcon'
  | 'hideTitle'
  | 'onRetry'
  | 'subControl'
  | 'rules'
  | 'clearable'
  | 'searchable'
  /** Cols Controls */
  | 'cols';

export type Dev_FormOptionsRadioGroupOption =
  | 'buttonVariant'
  | 'iconButtonVariant'
  | 'alertType'
  | 'color'
  | 'backgroundColor'
  | 'fontWeight'
  | 'tooltipPlace'
  | 'rotate'
  | 'icon'
  | 'iconPosition'
  | 'iconSpacing'
  | 'size'
  | 'spacing'
  | 'rows'
  | 'formCheckboxType'
  | 'formRadioGroupType'
  | 'formSelectSize'
  | 'currentPage'
  | 'lastPage';

export interface Dev_FormOptionsData<
  TColors extends AllColors = AllColors,
  TBackgroundColors extends AllColors = AllColors,
> {
  /** Multi Option Controls */
  buttonVariant?: Dev_FormControl_ButtonVariantProps['value'];
  iconButtonVariant?: Dev_FormControl_IconButtonVariantProps['value'];
  alertType?: Dev_FormControl_AlertTypeProps['value'];
  color?: TColors;
  backgroundColor?: TBackgroundColors;
  size?: Dev_FormControl_SizeProps['value'];
  fontWeight?: Dev_FormControl_FontWeightProps['value'];
  tooltipPlace?: Dev_FormControl_TooltipPlaceProps['value'];
  rotate?: Dev_FormControl_RotateProps['value'];
  spacing?: Dev_FormControl_SpacingProps['value'];
  icon?: Dev_FormControl_IconProps['value'];
  iconPosition?: Dev_FormControl_IconPositionProps['value'];
  iconSpacing?: Dev_FormControl_IconSpacingProps['value'];
  rows?: Dev_FormControl_RowsProps['value'];
  formCheckboxType?: Dev_FormControl_FormCheckboxTypeProps['value'];
  formRadioGroupType?: Dev_FormControl_FormRadioGroupTypeProps['value'];
  formSelectSize?: Dev_FormControl_FormSelectSizeProps['value'];
  currentPage?: Dev_FormControl_CurrentPageProps['value'];
  lastPage?: Dev_FormControl_LastPageProps['value'];
  /** Text Controls */
  url?: Dev_FormControl_UrlProps['value'];
  title?: Dev_FormControl_TitleProps['value'];
  placeholder?: Dev_FormControl_PlaceholderProps['value'];
  message?: Dev_FormControl_MessageProps['value'];
  helperText?: Dev_FormControl_HelperTextProps['value'];
  label?: Dev_FormControl_LabelProps['value'];
  /** Boolean Controls */
  loading?: Dev_FormControl_LoadingProps['value'];
  disabled?: Dev_FormControl_DisabledProps['value'];
  reverse?: Dev_FormControl_ReverseProps['value'];
  required?: Dev_FormControl_RequiredProps['value'];
  showIcon?: Dev_FormControl_ShowIconProps['value'];
  hideTitle?: Dev_FormControl_HideTitleProps['value'];
  onRetry?: Dev_FormControl_OnRetryProps['value'];
  subControl?: Dev_FormControl_SubControlProps['value'];
  rules?: Dev_FormControl_RulesProps['value'];
  clearable?: Dev_FormControl_ClearableProps['value'];
  searchable?: Dev_FormControl_SearchableProps['value'];
  /** Cols Controls */
  cols?: GridProps['cols'];
}

export interface Dev_FormOptionsControlCommonProps
  extends Pick<FormControlCommonProps<any>, 'disabled' | 'helperText'> {}

export interface Dev_FormOptionsControlPropsMap {
  /** Multi Option Controls */
  alertType?: Pick<Dev_FormControl_AlertTypeProps, keyof Dev_FormOptionsControlCommonProps>;
  backgroundColor?: Pick<
    Dev_FormControl_BackgroundColorProps,
    keyof Dev_FormOptionsControlCommonProps | 'useCustomColor'
  >;
  buttonVariant?: Pick<Dev_FormControl_ButtonVariantProps, keyof Dev_FormOptionsControlCommonProps>;
  color?: Pick<Dev_FormControl_ColorProps, keyof Dev_FormOptionsControlCommonProps | 'useCustomColor'>;
  fontWeight?: Pick<Dev_FormControl_FontWeightProps, keyof Dev_FormOptionsControlCommonProps>;
  tooltipPlace?: Pick<Dev_FormControl_TooltipPlaceProps, keyof Dev_FormOptionsControlCommonProps>;
  icon?: Pick<Dev_FormControl_IconProps, keyof Dev_FormOptionsControlCommonProps>;
  iconPosition?: Pick<Dev_FormControl_IconPositionProps, keyof Dev_FormOptionsControlCommonProps>;
  iconSpacing?: Pick<Dev_FormControl_IconSpacingProps, keyof Dev_FormOptionsControlCommonProps>;
  iconButtonVariant?: Pick<Dev_FormControl_IconButtonVariantProps, keyof Dev_FormOptionsControlCommonProps>;
  rotate?: Pick<Dev_FormControl_RotateProps, keyof Dev_FormOptionsControlCommonProps>;
  size?: Pick<Dev_FormControl_SizeProps, keyof Dev_FormOptionsControlCommonProps>;
  spacing?: Pick<Dev_FormControl_SpacingProps, keyof Dev_FormOptionsControlCommonProps>;
  rows?: Pick<Dev_FormControl_RowsProps, keyof Dev_FormOptionsControlCommonProps>;
  formCheckboxType?: Pick<Dev_FormControl_FormCheckboxTypeProps, keyof Dev_FormOptionsControlCommonProps>;
  formRadioGroupType?: Pick<Dev_FormControl_FormRadioGroupTypeProps, keyof Dev_FormOptionsControlCommonProps>;
  formSelectSize?: Pick<Dev_FormControl_FormSelectSizeProps, keyof Dev_FormOptionsControlCommonProps>;
  currentPage?: Pick<Dev_FormControl_CurrentPageProps, keyof Dev_FormOptionsControlCommonProps>;
  lastPage?: Pick<Dev_FormControl_LastPageProps, keyof Dev_FormOptionsControlCommonProps>;
  /** Text Controls */
  title?: Pick<Dev_FormControl_TitleProps, keyof Dev_FormOptionsControlCommonProps>;
  placeholder?: Pick<Dev_FormControl_PlaceholderProps, keyof Dev_FormOptionsControlCommonProps>;
  url?: Pick<Dev_FormControl_UrlProps, keyof Dev_FormOptionsControlCommonProps>;
  message?: Pick<Dev_FormControl_MessageProps, keyof Dev_FormOptionsControlCommonProps>;
  helperText?: Pick<Dev_FormControl_HelperTextProps, keyof Dev_FormOptionsControlCommonProps>;
  label?: Pick<Dev_FormControl_LabelProps, keyof Dev_FormOptionsControlCommonProps>;
  /** Boolean Controls */
  loading?: Pick<Dev_FormControl_LoadingProps, keyof Dev_FormOptionsControlCommonProps>;
  disabled?: Pick<Dev_FormControl_DisabledProps, keyof Dev_FormOptionsControlCommonProps>;
  reverse?: Pick<Dev_FormControl_ReverseProps, keyof Dev_FormOptionsControlCommonProps>;
  required?: Pick<Dev_FormControl_RequiredProps, keyof Dev_FormOptionsControlCommonProps>;
  showIcon?: Pick<Dev_FormControl_ShowIconProps, keyof Dev_FormOptionsControlCommonProps>;
  hideTitle?: Pick<Dev_FormControl_HideTitleProps, keyof Dev_FormOptionsControlCommonProps>;
  onRetry?: Pick<Dev_FormControl_OnRetryProps, keyof Dev_FormOptionsControlCommonProps>;
  subControl?: Pick<Dev_FormControl_SubControlProps, keyof Dev_FormOptionsControlCommonProps>;
  rules?: Pick<Dev_FormControl_RulesProps, keyof Dev_FormOptionsControlCommonProps>;
  clearable?: Pick<Dev_FormControl_ClearableProps, keyof Dev_FormOptionsControlCommonProps>;
  searchable?: Pick<Dev_FormControl_SearchableProps, keyof Dev_FormOptionsControlCommonProps>;
}

export interface Dev_FormOptionsProps<
  TColors extends AllColors = AllColors,
  TBackgroundColors extends AllColors = AllColors,
> {
  options: readonly (
    | Dev_FormOptionsOption
    | readonly (Dev_FormOptionsOption | { option: Dev_FormOptionsOption; cols: number } | null)[]
    | '|'
  )[];
  optionProps?: Dev_FormOptionsControlPropsMap;
  disabledOptions?: readonly (Dev_FormOptionsOption | false | null | undefined)[];
  selectControlOptions?: readonly (Dev_FormOptionsRadioGroupOption | false | null | undefined)[];
  multiOptionControlType?: 'select' | 'radio';
  formProps?: Omit<FormProps, 'children' | 'className'>;
  testPosition?: 'top' | 'bottom';
  colors?: readonly TColors[];
  useCustomColor?: boolean;
  backgroundColors?: readonly TBackgroundColors[];
  useCustomBackgroundColor?: boolean;
  code: Dev_CodeProps['children'];
  codePropsMap: Dev_CodeProps['propsMap'];
  gridCols?: GridProps['cols'];
  defaultData?: Partial<Dev_FormOptionsData<TColors, TBackgroundColors>>;
  testBackgroundColor?: AllColors | CSSProperties['backgroundColor'];
  onChange: (data: Dev_FormOptionsData<TColors, TBackgroundColors>) => void;
  onGetTest: (data: Dev_FormOptionsData<TColors, TBackgroundColors>) => ReactNode;
}
