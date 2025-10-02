import React from 'react';
import { ClearButtonProps as Props } from './ClearButton.types';
import './ClearButton.scss';

export const ClearButton = ({ onClick }: Props) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='FormInput_ClearButton' onClick={onClick}>
      <Box width={22} height={22}>
        <svg focusable='false' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='gray'>
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
        </svg>
      </Box>
    </div>
  );
};

export default ClearButton;
