import React from 'react';
import { FormControlContainerProps as Props } from './FormControlContainer.types';
import { useFormState } from '../../FormContext';
import './FormControlContainer.scss';

export const FormControlContainer = ({ className, children, ...props }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { titlePosition } = useFormState();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Box
      className={classnames(className, 'FormControlContainer', titlePosition === 'left' && 'FormControlContainer-row')}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FormControlContainer;
