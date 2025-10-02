import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { AlertType } from '@ccomp';

export const Dev_Alert_Variant = () => {
  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별' spacing={10}>
          <Divider />

          <Stack spacing={15} mt={5}>
            {AlertType.map((type, idx) => (
              <Tooltip key={idx} content={`<Alert type="${type}" message="..."  />`} place='top-start'>
                <Alert type={type} message='메시지' />
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='아아콘 노출 색상별' spacing={10}>
          <Divider />

          <Stack spacing={15} mt={5}>
            {AlertType.map((type, idx) => (
              <Tooltip key={idx} content={`<Alert type="${type}" message="..." showIcon  />`} place='top-start'>
                <Alert type={type} message='메시지' showIcon />
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='제목 색상별' spacing={10}>
          <Divider />

          <Stack spacing={15} mt={5}>
            {AlertType.map((type, idx) => (
              <Tooltip key={idx} content={`<Alert type="${type}" message="..." showIcon />`} place='top-start'>
                <Alert type={type} showIcon message='메시지' />
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='제목 아아콘 노출 색상별' spacing={10}>
          <Divider />

          <Stack spacing={15} mt={5}>
            {AlertType.map((type, idx) => (
              <Tooltip
                key={idx}
                content={`<Alert type="${type}" title="..." message="..." showIcon />`}
                place='top-start'
              >
                <Alert type={type} title='제목' message='메시지' showIcon />
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>
    </Stack>
  );
};

export default React.memo(Dev_Alert_Variant);
