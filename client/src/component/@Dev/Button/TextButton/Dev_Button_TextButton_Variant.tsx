import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../../@Common';
import { AllSizes, ButtonColors } from '@theme';
import { toast } from '@toast';

const Dev_Button_Button_Variant = () => {
  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={5}>
            {ButtonColors.map((color, idx) => (
              <Tooltip key={idx} place='top-start' content={`<TextButton color="${color}">...</TextButton>`}>
                <TextButton color={color} onClick={() => toast.info('클릭')}>
                  {color}
                </TextButton>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별' gap={10}>
          <Divider />

          <Flex row center gap={10} wrap mt={5}>
            {AllSizes.map((size, idx) => (
              <Tooltip key={idx} place='top-start' content={`<TextButton size="${size}">...</TextButton>`}>
                <TextButton size={size} onClick={() => toast.info('클릭')}>
                  {size}
                </TextButton>
              </Tooltip>
            ))}
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_Button_Button_Variant);
