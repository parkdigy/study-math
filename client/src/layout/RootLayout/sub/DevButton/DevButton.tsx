import React from 'react';
import { DevButtonProps as Props } from './DevButton.types';
import './DevButton.scss';

export const DevButton = ({ icon, onClick }: Props) => {
  return (
    <div className='DevButton' onClick={onClick}>
      <Icon size='30' color='text'>
        {icon}
      </Icon>
    </div>
  );
};

export default DevButton;
