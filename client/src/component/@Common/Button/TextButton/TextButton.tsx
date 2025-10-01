import React from 'react';
import { TextButtonProps as Props } from './TextButton.types';

export const TextButton = React.forwardRef<HTMLButtonElement, Props>(({ className, color = 'text', ...props }, ref) => {
  return <Button ref={ref} className={classnames(className, 'TextButton')} variant='text' color={color} {...props} />;
});

export default TextButton;
