import React from 'react';
import { ListProps as Props } from './List.types';
import { ListItem, ListTitle } from './sub';
import './List.scss';

export const List = ({ type = 'info', variant = 'default', items, spacing = 2, title, ...boxProps }: Props) => {
  return (
    <Box className='List' data-variant={variant} {...boxProps}>
      {title && <ListTitle type={type} content={title} />}
      <div className='ListItems' style={{ '--spacing': `${spacing}px` } as React.CSSProperties}>
        {items.map((item, idx) => (
          <ListItem key={idx} content={item} />
        ))}
      </div>
    </Box>
  );
};

export default List;
