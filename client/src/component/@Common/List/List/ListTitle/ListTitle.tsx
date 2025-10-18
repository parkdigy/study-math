import React from 'react';
import { ListTitleProps as Props } from './ListTitle.types';
import './ListTitle.scss';
import IconInfo from './icon_info.svg';

const ListTitle = ({ type, content }: Props) => {
  return (
    <div className='ListTitle'>
      {type === 'info' && (
        <div className='ListTitle__IconWrapper'>
          <Svg src={IconInfo} w={14} h={14} />
        </div>
      )}
      {content}
    </div>
  );
};

export default React.memo(ListTitle);
