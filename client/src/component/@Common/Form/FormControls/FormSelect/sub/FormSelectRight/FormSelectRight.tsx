import React from 'react';
import { FormSelectRightProps as Props } from './FormSelectRight.types';
import './FormSelectRight.scss';
import { LoadingIndicator } from '../../../../../Loadings';

export const FormSelectRight = ({ isFocused, isOpenDropdown, loading, showClear, clearable, onClear }: Props) => {
  return (
    <div className='FormSelectRight'>
      {/* 로딩 인디케이터 */}
      {loading && <LoadingIndicator className='FormSelectControlLoadingIndicator' color='opacity40' />}

      {clearable && showClear && (
        <Icon
          className='FormSelectRightClear'
          size='xl'
          color={isFocused ? 'text' : 'opacity40'}
          tabIndex={-1}
          onMouseDown={(e) => {
            e.stopPropagation();
            onClear();
          }}
        >
          close
        </Icon>
      )}

      {/* 화살표 */}
      <Icon className='FormSelectRightArrow' size='xl' color={isFocused ? 'text' : 'opacity40'}>
        {isOpenDropdown ? 'KeyboardArrowUp' : 'ExpandMore'}
      </Icon>
    </div>
  );
};

export default FormSelectRight;
