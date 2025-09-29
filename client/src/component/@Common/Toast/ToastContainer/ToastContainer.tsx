import React from 'react';
import { ToastContainerProps as Props } from './ToastContainer.types';
import { ToastContainer as _ToastContainer } from 'react-toastify';

export const ToastContainer = (props: Props) => {
  return <_ToastContainer {...props} />;
};

export default ToastContainer;
