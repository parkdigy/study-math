import React from 'react';
import { ListItemProps as Props } from './ListItem.types';
import './ListItem.scss';

const ListItem = ({ content }: Props) => {
  return (
    <div className='ListItem'>
      <div className='ListItemBullet' />
      <div>{content}</div>
    </div>
  );
};

export default React.memo(ListItem);
