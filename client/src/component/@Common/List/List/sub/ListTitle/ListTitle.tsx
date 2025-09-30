import React from 'react';
import { ListTitleProps as Props } from './ListTitle.types';
import './ListTitle.scss';

const ListTitle = ({ type, content }: Props) => {
  return (
    <div className='ListTitle'>
      {type === 'info' && (
        <Icon size={17} color='textLighten'>
          Info
        </Icon>
      )}
      {content}
    </div>
  );
};

export default React.memo(ListTitle);
