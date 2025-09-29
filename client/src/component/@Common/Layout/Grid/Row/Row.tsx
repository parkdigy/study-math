import React, { ReactElement } from 'react';
import { RowProps as Props } from './Row.types';
import { useGridState } from '../Context';
import util from '@util';
import { ColProps } from '../Col';

export const Row = ({ children }: Props) => {
  const { cols: gridCols } = useGridState();

  const items: { el: ReactElement; cols: number | undefined }[] = [];
  let fixedCols = 0;
  let flexibleColsCount = 0;

  React.Children.forEach(children, (element) => {
    if (React.isValidElement(element)) {
      const el = util.react.removeReactFragment(element);
      const els = Array.isArray(el) ? el.flat(Infinity) : [el];
      React.Children.map(els, (child) => {
        if (isElementName(child, 'Col')) {
          const childProps: ColProps = child.props;
          let cols = childProps.cols;
          if (cols !== undefined) {
            cols = Math.min(cols, gridCols);
          }
          items.push({ el: child, cols });
          if (cols !== undefined) {
            fixedCols += cols;
          } else {
            flexibleColsCount += 1;
          }
        }
      });
    }
  });

  const flexibleCols = Math.max(Math.min(Math.floor((gridCols - fixedCols) / flexibleColsCount), gridCols), 1);

  return items.map(({ el, cols }, idx) => {
    return React.cloneElement(el, {
      key: idx,
      cols: ifUndefined(cols, flexibleCols),
      'data-inner-num': idx + 1,
    } as any);
  });
};

export default Row;

function isElementName(el: ReactElement, name: string) {
  if (React.isValidElement(el)) {
    return (el.type as any).name === name;
  } else {
    return false;
  }
}
