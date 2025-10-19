import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { AllColors, AllSizes } from '@theme';

const Dev_Icon_Variant = () => {
  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={10}>
            <Tooltip place='top-start' content='<Icon>...</Icon>'>
              <Icon>account_circle</Icon>
            </Tooltip>

            {AllColors.map((color, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Icon color="${color}">...</Icon>`}>
                <Icon color={color}>account_circle</Icon>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={10}>
            {AllSizes.map((size, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Icon size="${size}">...</Icon>`}>
                <Icon size={size}>account_circle</Icon>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_Icon_Variant);
