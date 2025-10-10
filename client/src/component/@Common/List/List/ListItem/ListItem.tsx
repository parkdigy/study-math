import React from 'react';
import { ListItemProps as Props } from './ListItem.types';
import './ListItem.scss';

const ListItem = ({ content }: Props) => {
  return (
    <div className='ListItem'>
      <div className='ListItem__Bullet_Container'>
        <div className='ListItem__Bullet' />
      </div>
      <div className='ListItem__Content'>{content}</div>
    </div>
  );
};

export default React.memo(ListItem);
