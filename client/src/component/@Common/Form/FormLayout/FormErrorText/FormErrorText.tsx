import React from 'react';
import { FormErrorTextProps as Props } from './FormErrorText.types';

export const FormErrorText = ({ children, className, absolute }: Props) => {
  return (
    <Box className={classnames(className, 'FormErrorText')} position='relative'>
      {absolute && <>&nbsp;</>}
      <Box position={absolute ? 'absolute' : undefined} top={absolute ? 0 : undefined}>
        {notEmpty(children) && (typeof children === 'string' || typeof children === 'number') ? (
          <T color='error' size={14} pv={2} whiteSpace={absolute ? 'nowrap' : undefined}>
            {children}
          </T>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};

export default FormErrorText;
