import React from 'react';
import { FormTitleProps as Props } from './FormTitle.types';
import { useFormState } from '../../FormContext';
import './FormTitle.scss';

export const FormTitle = ({ className, labelProps, height, width, required, children }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { titlePosition, titleWidth } = useFormState();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Box
      className={classnames(className, 'FormTitle')}
      width={titlePosition === 'left' ? ifUndefined(width, titleWidth) : undefined}
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
