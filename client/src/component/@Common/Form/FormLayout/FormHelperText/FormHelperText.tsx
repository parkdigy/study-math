import React from 'react';
import { FormHelperTextProps as Props } from './FormHelperText.types';
import './FormHelperText.scss';

export const FormHelperText = ({ children, className, focused }: Props) => {
  return (
    <div className={classnames(className, 'FormHelperText', focused && 'FormHelperText-focused')}>
      <Icon>Error</Icon>
      {children}
    </div>
  );
};

export default FormHelperText;
