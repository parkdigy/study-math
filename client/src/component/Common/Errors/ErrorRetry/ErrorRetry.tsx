/********************************************************************************************************************
 * 에러 발생 시 재시도 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { ErrorRetryProps as Props } from './ErrorRetry.types';
import './ErrorRetry.scss';

const ErrorRetry: React.FC<Props> = ({ onRetry }) => {
  return (
    <div className='ErrorRetry'>
      <div>
        <div className='ErrorRetry-message-container'>
          <div>오류가 발생했습니다.</div>
          {onRetry && <div>잠시 후 재시도 해주세요.</div>}
        </div>
        {onRetry && (
          <div className='ErrorRetry-retry-container'>
            <button onClick={onRetry}>재시도</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorRetry;
