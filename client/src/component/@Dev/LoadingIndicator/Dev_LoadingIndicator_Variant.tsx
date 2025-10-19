import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { LoadingIndicator } from '@ccomp';
import { AllColors, FriendlyNameSizes, getSizeOfFriendlyName } from '@theme';

const Dev_LoadingIndicator_Variant = () => {
  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={10}>
            <Tooltip place='top-start' content='<LoadingIndicator>...</LoadingIndicator>'>
              <Box>
                <LoadingIndicator size='x2l' />
              </Box>
            </Tooltip>

            {AllColors.map((color, idx) => (
              <Tooltip
                key={idx}
                place='top-start'
                content={`<LoadingIndicator color="${color}">...</LoadingIndicator>`}
              >
                <Box>
                  <LoadingIndicator color={color} size='x2l' />
                </Box>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={10}>
            {FriendlyNameSizes.map((size, idx) => (
              <Tooltip
                key={idx}
                place='top-start'
                content={
                  <>
                    <div>{`<LoadingIndicator size="${size}">...</LoadingIndicator>`}</div>
                    <div>{`<LoadingIndicator size="${getSizeOfFriendlyName(size)}">...</LoadingIndicator>`}</div>
                  </>
                }
              >
                <Box>
                  <LoadingIndicator key={idx} size={size} />
                </Box>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_LoadingIndicator_Variant);
