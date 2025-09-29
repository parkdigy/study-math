import React from 'react';
import { FormTitleProps as Props } from './FormTitle.types';
import { useFormState } from '../../FormContext';
import './FormTitle.scss';

export const FormTitle = ({ className, labelProps, disabled, height, error, required, children }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { titlePosition, titleWidth } = useFormState();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Box
      className={classnames(
        className,
        'FormTitle',
        error && 'FormTitle-error',
        disabled && 'FormTitle-disabled',
        titlePosition === 'left' && 'FormTitle-left'
      )}
      width={titlePosition === 'left' ? titleWidth : undefined}
      height={height}
    >
      <T {...labelProps}>
        {children}
        {required && <span>*</span>}
      </T>
    </Box>
  );
};

export default FormTitle;
