import React from 'react';
import { ShowButtonProps as Props } from './ShowButton.types';
import { default as IconEyeOn } from './icon_eye_on.svg';
import { default as IconEyeOff } from './icon_eye_off.svg';
import './ShowButton.scss';

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
