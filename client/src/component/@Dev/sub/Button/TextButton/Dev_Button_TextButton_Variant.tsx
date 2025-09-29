import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../../@Common';
import { AllSizes, ButtonColors } from '@theme';
import { toast } from '@toast';

const Dev_Button_Button_Variant = () => {
  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            {ButtonColors.map((color, idx) => (
              <Tooltip key={idx} place='top-start' content={`<TextButton color="${color}">...</TextButton>`}>
                <TextButton color={color} onClick={() => toast.info('클릭')}>
                  {color}
                </TextButton>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            {AllSizes.map((size, idx) => (
              <Tooltip key={idx} place='top-start' content={`<TextButton size="${size}">...</TextButton>`}>
                <TextButton size={size} onClick={() => toast.info('클릭')}>
                  {size}
                </TextButton>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>
    </Stack>
  );
};

export default React.memo(Dev_Button_Button_Variant);
