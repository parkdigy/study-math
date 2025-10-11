import React from 'react';
import { FormSelectRightProps as Props } from './FormSelectRight.types';
import { LoadingIndicator } from '../../../../../Loadings';
import { IconArrowDown } from './icons';
import './FormSelectRight.scss';

export const FormSelectRight = ({ size, isOpenDropdown, loading, showClear, clearable, onClear }: Props) => {
  return (
    <div
      className={classnames(
        'FormSelectRight',
        `FormSelectRight-size-${size}`,
        isOpenDropdown && 'FormSelectRight-open-dropdown'
      )}
    >
      {/* 로딩 인디케이터 */}
      {loading && <LoadingIndicator c='opacity40' s={size === 'small' ? 16 : 20} />}

      {clearable && showClear && (
        <Box
          className='FormSelectRight__Clear'
          tabIndex={-1}
          onMouseDown={(e) => {
            e.stopPropagation();
            onClear();
          }}
        >
          <div style={{ width: size === 'small' ? 20 : 24, height: size === 'small' ? 20 : 24 }}>
            <svg
              focusable='false'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='gray'
            >
              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            </svg>
          </div>
        </Box>
      )}

      {/* 화살표 */}
      <Stack row center>
        <Divider vertical h={size === 'small' ? 16 : 24} />
        <IconArrowDown className='FormSelectRight__Arrow' />
      </Stack>
    </div>
  );
};

export default FormSelectRight;
