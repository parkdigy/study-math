import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { ErrorRetry } from '@ccomp';
import { DefaultColors } from '@theme';

const Dev_ErrorRetry_Variant = () => {
  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별' spacing={10}>
          <Divider />

          <Grid cols={{ tabletSm: 2, tabletLg: 3 }} spacing={20} mt={10}>
            {DefaultColors.map((color, idx) => (
              <Col key={idx}>
                <Tooltip content={'<ErrorRetry color={...} onRetry={...} />'}>
                  <ErrorRetry color={color} onRetry={() => ll('재시도')} />
                </Tooltip>
              </Col>
            ))}
          </Grid>
        </Dev_PanelItem>
      </Dev_Panel>
    </Stack>
  );
};

export default React.memo(Dev_ErrorRetry_Variant);
