import React from 'react';
import { ListProps as Props } from './List.types';
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import './List.scss';

export const List = React.forwardRef<HTMLDivElement, Props>(
  ({ type = 'info', variant = 'default', items, spacing = 2, title, ...boxProps }, ref) => {
    return (
      <Box ref={ref} className={classnames('List', `List-variant-${variant}`)} {...boxProps}>
        {title && <ListTitle type={type} content={title} />}
        <div className='List__Items' style={{ '--spacing': `${spacing}px` } as React.CSSProperties}>
          {items.map((item, idx) => (
            <ListItem key={idx} content={item} />
          ))}
        </div>
      </Box>
    );
  }
);

export default List;
