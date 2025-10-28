import React from 'react';
import { TabsProps as Props } from './Tabs.types';
import './Tabs.scss';

export const Tabs = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends string>(
    { items, value, onChange }: Props<T>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div ref={ref} className='Tabs'>
        {items.map((item, idx) => (
          <div
            className={classnames(
              'Tabs__Item',
              value === item.value && 'Tabs__Item-active',
              item.disabled && 'Tabs__Item-disabled'
            )}
            key={idx}
            onClick={item.disabled || item.value === value ? undefined : () => onChange(item.value)}
          >
            <T whiteSpace='pre-wrap'>{item.label}</T>
          </div>
        ))}
      </div>
    );
  })
);

export default Tabs;
