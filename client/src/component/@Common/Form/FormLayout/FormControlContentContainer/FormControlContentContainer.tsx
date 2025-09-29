import React from 'react';
import { FormControlContentContainerProps as Props } from './FormControlContentContainer.types';

export const FormControlContentContainer = ({ children, className }: Props) => {
  return (
    <Stack className={classnames(className, 'FormControlContentContainer')} flex={1} spacing={5}>
      {children}
    </Stack>
  );
};

export default FormControlContentContainer;
