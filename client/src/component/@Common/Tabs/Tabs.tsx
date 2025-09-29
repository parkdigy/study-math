import React from 'react';
import { TabsProps as Props } from './Tabs.types';
import './Tabs.scss';

export function Tabs<T extends string>({ items, value, onChange }: Props<T>) {
  return (
    <div className='Tabs'>
      {items.map((item, idx) => (
        <div
          className={classnames(
            'TabsItem',
            value === item.value && 'TabsItem-active',
            item.disabled && 'TabsItem-disabled'
          )}
          key={idx}
          onClick={item.disabled || item.value === value ? undefined : () => onChange(item.value)}
        >
          <pre>{item.label}</pre>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
