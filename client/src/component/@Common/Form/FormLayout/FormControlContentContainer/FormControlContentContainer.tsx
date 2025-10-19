import React, { CSSProperties } from 'react';
import { FormControlContentContainerProps as Props } from './FormControlContentContainer.types';
import './FormControlContentContainer.scss';

export const FormControlContentContainer = ({ children, className, gap = 10 }: Props) => {
  return (
    <div
      className={classnames(className, 'FormControlContentContainer')}
      style={{ '--gap': `${gap}px` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default FormControlContentContainer;
