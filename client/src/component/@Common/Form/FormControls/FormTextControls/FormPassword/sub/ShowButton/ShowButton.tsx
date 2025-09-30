import React from 'react';
import { ShowButtonProps as Props } from './ShowButton.types';
import './ShowButton.scss';
import { IconEyeOff, IconEyeOn } from './icons';

export const ShowButton = ({ active, onClick }: Props) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='FormPassword_ShowButton' onClick={onClick}>
      <Img src={active ? IconEyeOff : IconEyeOn} width={24} height={24} />
    </div>
  );
};

export default ShowButton;
