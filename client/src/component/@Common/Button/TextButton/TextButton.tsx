import React from 'react';
import { TextButtonProps as Props } from './TextButton.types';

export const TextButton = ({ className, color = 'text', ...props }: Props) => {
  return <Button className={classnames(className, 'TextButton')} variant='text' color={color} {...props} />;
};

export default TextButton;
