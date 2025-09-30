import React from 'react';
import { FormErrorTextProps as Props } from './FormErrorText.types';
import './FormErrorText.scss';

export const FormErrorText = ({ children, className, absolute }: Props) => {
  return (
    <Box className={classnames(className, 'FormErrorText')} position='relative'>
      {absolute && <>&nbsp;</>}
      <Box
        className='FormErrorText__Content'
        position={absolute ? 'absolute' : undefined}
        top={absolute ? 0 : undefined}
      >
        <Icon>Error</Icon>
        {notEmpty(children) && (typeof children === 'string' || typeof children === 'number') ? (
          <T whiteSpace={absolute ? 'nowrap' : undefined}>{children}</T>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};

export default FormErrorText;
