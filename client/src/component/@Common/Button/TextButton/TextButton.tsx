import React from 'react';
import { TextButtonProps as Props } from './TextButton.types';
import './TextButton.scss';

export const TextButton = React.forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <BoxButton ref={ref} className={classnames(className, 'TextButton')} {...props}>
      {children}
    </BoxButton>
  );
});

export default TextButton;
