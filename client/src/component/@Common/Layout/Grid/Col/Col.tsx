import React from 'react';
import { ColProps as Props } from './Col.types';
import './Col.scss';

export const Col = React.forwardRef<HTMLDivElement, Props>(({ children, className, cols = 1, ...props }, ref) => {
  const innerNum = (props as any)['data-inner-num'];

  return (
    <Flex
      ref={ref}
      className={classnames(className, 'GridCol', innerNum === 1 && 'GridCol-first', `GridCol-${cols}`)}
      {...props}
    >
      {children}
    </Flex>
  );
});

export default Col;
