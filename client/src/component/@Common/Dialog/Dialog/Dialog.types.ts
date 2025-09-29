import { ReactElement } from 'react';

export type DialogPosition = 'top' | 'center' | 'bottom';

type DialogButtonProps = Omit<ButtonProps, 'children' | 'onPress'>;

interface DialogCommonProps {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;
  icon?: IconProps['name'];
  iconColor?: IconProps['color'];
  minWidth?: number;
  maxWidth?: number;
  ph?: number;
  pv?: number;
  spacing?: number;
  transparent?: boolean;
  title?: string;
  content: ReactNode;
  contentColor?: TProps['color'];
  subContent?: ReactNode;
  subContentColor?: TProps['color'];
  subHiddenContent?: ReactNode;
  autoHide?: boolean;
  position?: DialogPosition;
  marginTop?: number;
  marginBottom?: number;
  reverseButtons?: boolean;
  bottomView?: ReactElement;
  preventBackClose?: boolean;
  onConfirm?: () => void;
}

export interface DialogProps extends DialogCommonProps {
  confirmLabel?: string;
  confirmButtonColor?: ButtonProps['color'];
  confirmButtonProps?: DialogButtonProps;
  cancelLabel?: string;
  cancelButtonColor?: ButtonProps['color'];
  cancelButtonProps?: DialogButtonProps;
  onCancel?: () => void;
}

export interface DialogInnerProps extends DialogProps {
  type: 'dialog' | 'alert' | 'confirm';
  id: number;
  hide?: boolean;
  loading?: boolean;
}

export interface DialogOnlyProps extends DialogCommonProps {}

export interface DialogAlertProps
  extends DialogCommonProps,
    Pick<DialogProps, 'confirmLabel' | 'confirmButtonColor' | 'confirmButtonProps'> {}

export interface DialogConfirmProps
  extends DialogCommonProps,
    Pick<
      DialogProps,
      | 'cancelLabel'
      | 'cancelButtonColor'
      | 'cancelButtonProps'
      | 'onCancel'
      | 'confirmLabel'
      | 'confirmButtonColor'
      | 'confirmButtonProps'
    > {}

export interface DialogInnerCommands {
  open: (props: DialogOnlyProps) => DialogCommands;
  openAlert: (props: DialogAlertProps) => DialogCommands;
  openSuccessAlert: (props: DialogAlertProps) => DialogCommands;
  openWarningAlert: (props: DialogAlertProps) => DialogCommands;
  openErrorAlert: (props: DialogAlertProps) => DialogCommands;
  openConfirm: (props: DialogConfirmProps) => DialogCommands;
}

export interface DialogCommands {
  close: () => void;
  setLoading: (loading: boolean) => void;
}
