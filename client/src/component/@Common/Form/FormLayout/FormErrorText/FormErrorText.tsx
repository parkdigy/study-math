import React from 'react';
import { FormErrorTextProps as Props } from './FormErrorText.types';
import './FormErrorText.scss';

export const FormErrorText = ({ children, className, absolute }: Props) => {
  return (
    <Box className={classnames(className, 'FormErrorText')} relative>
      {absolute && <>&nbsp;</>}
      <Box className='FormErrorText__Content' absolute={absolute} top={absolute ? 0 : undefined}>
        <Icon>Error</Icon>
        {notEmpty(children) && (typeof children === 'string' || typeof children === 'number') ? (
          <T nowrap={absolute}>{children}</T>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};

export default FormErrorText;
