import React from 'react';
import { StackButtonProps as Props } from './StackButton.types';
import './StackButton.scss';

export const StackButton = React.forwardRef<HTMLDivElement, Props>(({ className, disabled, ...props }, ref) => {
  return (
    <Stack ref={ref} className={classnames(className, 'StackButton', disabled && 'StackButton-disabled')} {...props} />
  );
});

export default StackButton;
