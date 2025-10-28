import React from 'react';
import { ListItemProps as Props } from './ListItem.types';
import './ListItem.scss';

const ListItem = ({ content }: Props) => {
  return (
    <div className='ListItem'>
      <div className='ListItem__Bullet_Container'>
        <div className='ListItem__Bullet' />
      </div>
      <div>
        {typeof content === 'string' ? (
          <T whiteSpace='pre-wrap' wordBreak='break-all'>
            {content}
          </T>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default React.memo(ListItem);
