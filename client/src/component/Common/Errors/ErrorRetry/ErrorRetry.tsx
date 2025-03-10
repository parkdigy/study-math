/********************************************************************************************************************
 * 에러 발생 시 재시도 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { ErrorRetryProps as Props } from './ErrorRetry.types';
import Button from '../../Button';
import Icon from '../../Icon';
import styled from 'styled-components';

const ErrorRetry: React.FC<Props> = ({ message, fullScreen, fullSize, onRetry }) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Container className={classnames(fullScreen && 'full-screen', fullSize && 'full-size')}>
      <Content>
        <div>
          <Icon size={32}>error</Icon>
        </div>
        <div>
          {message ? (
            message
          ) : (
            <>
              <p>오류가 발생했습니다.</p>
              {onRetry && <p>잠시 후 재시도 해주세요.</p>}
            </>
          )}
        </div>
        {onRetry && (
          <Button color='light' style={{ marginTop: 10 }} onClick={onRetry}>
            재시도
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default ErrorRetry;

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  &.full-screen {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  &.full-size {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
  background-color: #f8f8f8;
  padding: 20px 40px;
  border-radius: 20px;
`;
