import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../../@Common';
import { AllSizes, ButtonColors } from '@theme';
import { toast } from '@common';

const Dev_Button_Button_Variant = () => {
  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별 기본 스타일' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            <Tooltip place='top-start' content='<Button>...</Button>'>
              <Button onClick={() => toast.info('클릭')}>기본</Button>
            </Tooltip>

            {ButtonColors.map((color, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Button color="${color}">...</Button>`}>
                <Button color={color} onClick={() => toast.info('클릭')}>
                  {color}
                </Button>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별 기본 스타일' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            {AllSizes.map((size, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Button size="${size}">...</Button>`}>
                <Button size={size} onClick={() => toast.info('클릭')}>
                  {size}
                </Button>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='색상별 윤곽선 스타일' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            {ButtonColors.map((color, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Button variant='outlined' color="${color}">...</Button>`}>
                <Button variant='outlined' color={color} onClick={() => toast.info('클릭')}>
                  {color}
                </Button>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별 윤곽선 스타일' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            {AllSizes.map((size, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Button variant='outlined' size="${size}">...</Button>`}>
                <Button variant='outlined' size={size} onClick={() => toast.info('클릭')}>
                  {size}
                </Button>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='색상별 텍스트 스타일' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            {ButtonColors.map((color, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Button variant='text' color="${color}">...</Button>`}>
                <Button variant='text' color={color} onClick={() => toast.info('클릭')}>
                  {color}
                </Button>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별 텍스트 스타일' spacing={10}>
          <Divider />

          <Stack row center spacing={10} wrap mt={5}>
            {AllSizes.map((size, idx) => (
              <Tooltip key={idx} place='top-start' content={`<Button variant='text' size="${size}">...</Button>`}>
                <Button variant='text' size={size} onClick={() => toast.info('클릭')}>
                  {size}
                </Button>
              </Tooltip>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>
    </Stack>
  );
};

export default React.memo(Dev_Button_Button_Variant);
