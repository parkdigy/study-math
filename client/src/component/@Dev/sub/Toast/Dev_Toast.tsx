import React from 'react';
import { toast } from '@toast';
import { Dev_Panel } from '../@Common';

export const Dev_Toast = () => {
  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>토스트 (Toast)</TTitleLarge700>

      <Divider />

      <Dev_Panel>
        <Grid cols={{ mobileMd: 2, tabletSm: 3, tabletMd: 4, tabletLg: 5 }} spacing={10}>
          <Col>
            <Tooltip place='top-start' content="toast.default('내용')">
              <Button color='opacity10' onClick={() => toast.default('기본 토스트 메시지입니다.')}>
                toast.default
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip place='top-start' content="toast.info('내용')">
              <Button color='primary' onClick={() => toast.info('정보 토스트 메시지입니다.')}>
                toast.info
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip place='top-start' content="toast.success('내용')">
              <Button color='success' onClick={() => toast.success('성공 토스트 메시지입니다.')}>
                toast.success
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip place='top-start' content="toast.warning('내용')">
              <Button color='warning' onClick={() => toast.warning('경고 토스트 메시지입니다.')}>
                toast.warning
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip place='top-start' content="toast.error('내용')">
              <Button color='error' onClick={() => toast.error('오류 토스트 메시지입니다.')}>
                toast.error
              </Button>
            </Tooltip>
          </Col>
        </Grid>
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Toast;
