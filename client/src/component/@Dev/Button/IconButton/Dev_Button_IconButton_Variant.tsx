import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../../@Common';
import { AllSizes, ButtonColors } from '@theme';
import { toast } from '@common';

const Dev_Button_IconButton_Variant = () => {
  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별 기본 스타일' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={5}>
            <Tooltip place='top-start' content={'<IconButton>...</IconButton>'}>
              <IconButton onClick={() => toast.info('클릭')}>RocketLaunch</IconButton>
            </Tooltip>

            {ButtonColors.map((color, idx) => (
              <Tooltip key={idx} place='top-start' content={`<IconButton color="${color}">...</IconButton>`}>
                <IconButton color={color} onClick={() => toast.info('클릭')}>
                  RocketLaunch
                </IconButton>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별 기본 스타일' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={5}>
            {AllSizes.map((size, idx) => (
              <Tooltip key={idx} place='top-start' content={`<IconButton size="${size}">...</IconButton>`}>
                <IconButton size={size} onClick={() => toast.info('클릭')}>
                  RocketLaunch
                </IconButton>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='색상별 둥근 스타일' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={5}>
            <Tooltip place='top-start' content={`<IconButton variant="rounded">...</IconButton>`}>
              <IconButton variant='rounded' onClick={() => toast.info('클릭')}>
                RocketLaunch
              </IconButton>
            </Tooltip>

            {ButtonColors.map((color, idx) => (
              <Tooltip
                key={idx}
                place='top-start'
                content={`<IconButton variant="rounded" color="${color}">...</IconButton>`}
              >
                <IconButton variant='rounded' color={color} onClick={() => toast.info('클릭')}>
                  RocketLaunch
                </IconButton>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별 둥근 스타일' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={5}>
            {AllSizes.map((size, idx) => (
              <Tooltip
                key={idx}
                place='top-start'
                content={`<IconButton variant="rounded" size="${size}">...</IconButton>`}
              >
                <IconButton variant='rounded' size={size} onClick={() => toast.info('클릭')}>
                  RocketLaunch
                </IconButton>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_Button_IconButton_Variant);
