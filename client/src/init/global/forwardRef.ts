import React from 'react';

export function _ToForwardRefExoticComponent<T>(
  component: T,
  ext?: Pick<React.ForwardRefExoticComponent<any>, 'displayName'>
): T & Pick<React.ForwardRefExoticComponent<any>, 'displayName' | 'propTypes' | '$$typeof'> {
  const fComponent = component as React.ForwardRefExoticComponent<any>;
  fComponent.displayName = ext?.displayName;
  return component as T & Pick<React.ForwardRefExoticComponent<any>, 'displayName' | 'propTypes' | '$$typeof'>;
}

export function _AutoTypeForwardRef<T, P = object>(
  render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null
): (props: P & React.RefAttributes<T>) => React.ReactElement | null {
  return React.forwardRef<any, any>(render) as (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

declare global {
  function ToForwardRefExoticComponent<T>(
    component: T,
    ext?: Pick<React.ForwardRefExoticComponent<any>, 'displayName'>
  ): T & Pick<React.ForwardRefExoticComponent<any>, 'displayName' | 'propTypes' | '$$typeof'>;
  function AutoTypeForwardRef<T, P = object>(
    render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

globalThis.ToForwardRefExoticComponent = _ToForwardRefExoticComponent;
globalThis.AutoTypeForwardRef = _AutoTypeForwardRef;
