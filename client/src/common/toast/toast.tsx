import React from 'react';
import { toast as _toast, ToastOptions } from 'react-toastify';
import app from '@app';
import './toast.scss';

export const toast = {
  /********************************************************************************************************************
   * 기본 토스트
   * ******************************************************************************************************************/
  default(msg: ReactNode, options?: ToastOptions) {
    const theme = app.getTheme();
    const type = ifUndefined(options?.type, 'default');

    let backgroundColor: string;
    let color: string;
    let iconName: IconProps['children'] | undefined;
    switch (type) {
      case 'default':
        backgroundColor = theme.dark ? '#222222' : '#ffffff';
        color = theme.colors.text;
        break;
      case 'info':
        backgroundColor = theme.colors.primary;
        color = theme.colors.onPrimary;
        iconName = 'Info';
        break;
      case 'success':
        backgroundColor = theme.colors.success;
        color = theme.colors.onSuccess;
        iconName = 'CheckCircle';
        break;
      case 'warning':
        backgroundColor = theme.colors.warning;
        color = theme.colors.onWarning;
        iconName = 'Warning';
        break;
      case 'error':
        backgroundColor = theme.colors.error;
        color = theme.colors.onError;
        iconName = 'Error';
        break;
    }

    const finalOptions: ToastOptions = {
      hideProgressBar: true,
      autoClose: 2000,
      style: { backgroundColor: backgroundColor, color: color },
      closeButton: ({ closeToast }) => <CloseButton color={color} closeToast={closeToast} />,
      icon: iconName ? (
        <Icon color={color} size={25}>
          {iconName}
        </Icon>
      ) : undefined,
      ...options,
      className: classnames('Toast', options?.className),
    };

    _toast(<div style={{ flex: 1 }}>{msg}</div>, finalOptions);
  },

  /********************************************************************************************************************
   * 정보 토스트
   * ******************************************************************************************************************/
  info(msg: ReactNode, options?: Omit<ToastOptions, 'type'>) {
    this.default(msg, { ...options, type: 'info' });
  },

  /********************************************************************************************************************
   * 성공 토스트
   * ******************************************************************************************************************/
  success(msg: ReactNode, options?: Omit<ToastOptions, 'type'>) {
    this.default(msg, { ...options, type: 'success' });
  },

  /********************************************************************************************************************
   * 경고 토스트
   * ******************************************************************************************************************/
  warning(msg: ReactNode, options?: Omit<ToastOptions, 'type'>) {
    this.default(msg, { ...options, type: 'warning' });
  },

  /********************************************************************************************************************
   * 오류 토스트
   * ******************************************************************************************************************/
  error(msg: ReactNode, options?: Omit<ToastOptions, 'type'>) {
    this.default(msg, { ...options, type: 'error' });
  },
};

export default toast;

/********************************************************************************************************************
 * CloseButton
 * ******************************************************************************************************************/

const CloseButton = ({ color, closeToast }: { color: string; closeToast?: () => void }) => (
  <Box cursor='pointer'>
    <Icon color={color} size={'x2l'} onClick={closeToast} cursor='pointer'>
      close
    </Icon>
  </Box>
);
