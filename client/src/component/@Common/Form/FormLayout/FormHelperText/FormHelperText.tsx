import React from 'react';
import { FormHelperTextProps as Props } from './FormHelperText.types';
import './FormHelperText.scss';

export const FormHelperText = ({ children, className }: Props) => {
  return (
    <div className={classnames(className, 'FormHelperText')}>
      <Icon>Error</Icon>
      {children}
    </div>
  );
};

export default FormHelperText;
