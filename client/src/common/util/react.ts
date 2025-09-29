import React from 'react';

export const react = {
  /********************************************************************************************************************
   * ReactElement 가 Fragment 인지 확인
   * ******************************************************************************************************************/
  isReactFragment(element: ReactElement) {
    try {
      return element.type.toString() === React.Fragment.toString();
    } catch {
      return false;
    }
  },

  /********************************************************************************************************************
   * ReactElement 에서 Fragment 제거
   * ******************************************************************************************************************/
  removeReactFragment(element: ReactElement): any {
    if (this.isReactFragment(element)) {
      const children: ReactElement | ReactElement[] = (element.props as any).children;
      if (children) {
        if (Array.isArray(children)) {
          return children.map((childElement) => {
            if (React.isValidElement(childElement)) {
              return this.removeReactFragment(childElement);
            } else {
              return childElement;
            }
          });
        } else {
          return element;
        }
      } else {
        return element;
      }
    } else {
      return element;
    }
  },
};

export default react;
