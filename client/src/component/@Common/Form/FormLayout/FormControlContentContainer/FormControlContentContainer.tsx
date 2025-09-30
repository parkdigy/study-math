import React, { CSSProperties } from 'react';
import { FormControlContentContainerProps as Props } from './FormControlContentContainer.types';
import './FormControlContentContainer.scss';

export const FormControlContentContainer = ({ children, className, spacing = 10 }: Props) => {
  return (
    <div
      className={classnames(className, 'FormControlContentContainer')}
      style={{ '--gap': `${spacing}px` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default FormControlContentContainer;
