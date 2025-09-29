import React from 'react';
import { TextButtonProps as Props } from './TextButton.types';

export const TextButton = (props: Props) => {
  return <Button variant='text' {...props} />;
};

export default TextButton;
