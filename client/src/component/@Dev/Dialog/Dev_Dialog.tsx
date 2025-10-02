import React from 'react';
import { Dev_Panel } from '../@Common';

export const Dev_Dialog = () => {
  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>다이얼로그 (Dialog)</TTitleLarge700>

      <Divider />

      <Dev_Panel>
        <Grid cols={{ mobileMd: 2, tabletSm: 3, tabletMd: 4, tabletLg: 5 }} spacing={10}>
          <Col>
            <Tooltip place='top-start' content="Dialog.openAlert({ title: '제목', content: '내용' })">
              <Button
                onClick={() => {
                  Dialog.openAlert({
                    title: '제목입니다',
                    content: '이 곳은 내용이 표시되는 공간입니다.\n내용을 확인해 주세요.\n\n감사합니다.',
                  });
                }}
              >
                Dialog.openAlert
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip place='top-start' content="Dialog.openSuccessAlert({ title: '제목', content: '내용' })">
              <Button
                color='success'
                onClick={() => {
                  Dialog.openSuccessAlert({
                    title: '제목입니다',
                    content: '이 곳은 내용이 표시되는 공간입니다.\n내용을 확인해 주세요.\n\n감사합니다.',
                  });
                }}
              >
                Dialog.openSuccessAlert
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip place='top-start' content="Dialog.openWarningAlert({ title: '제목', content: '내용' })">
              <Button
                color='warning'
                onClick={() => {
                  Dialog.openWarningAlert({
                    title: '제목입니다',
                    content: '이 곳은 내용이 표시되는 공간입니다.\n내용을 확인해 주세요.\n\n감사합니다.',
                  });
                }}
              >
                Dialog.openWarningAlert
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip place='top-start' content="Dialog.openErrorAlert({ title: '제목', content: '내용' })">
              <Button
                color='error'
                onClick={() => {
                  Dialog.openErrorAlert({
                    title: '제목입니다',
                    content: '이 곳은 내용이 표시되는 공간입니다.\n내용을 확인해 주세요.\n\n감사합니다.',
                  });
                }}
              >
                Dialog.openErrorAlert
              </Button>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip
              place='top-start'
              content="Dialog.openConfirm({ title: '제목', content: '내용', onConfirm() { ... } })"
            >
              <Button
                onClick={() => {
                  const dialog = Dialog.openConfirm({
                    title: '제목입니다',
                    content: '이 곳은 내용이 표시되는 공간입니다.\n내용을 확인해 주세요.\n\n감사합니다.',
                    onConfirm: () => {
                      dialog.setLoading(true);
                      setTimeout(() => {
                        dialog.close();
                      }, 2000);
                    },
                  });
                }}
              >
                Dialog.openConfirm
              </Button>
            </Tooltip>
          </Col>
        </Grid>
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Dialog;
