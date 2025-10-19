import React from 'react';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_FormOptionsProps, Dev_Panel } from '../../@Common';
import { AllColors } from '@theme';
import code from './Dev_Button_FlexButton.code.md';
import { toast } from '@common';
import { FlattenArray } from '@pdg/types';

const _formOptions = [['color', 'backgroundColor'], '|', 'url', '|', ['disabled']] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionProps: Dev_FormOptionsProps['optionProps'] = {
  url: { helperText: 'URL을 입력하면, 클릭 시 자동으로 URL로 이동 (내부 URL은 / 로 시작)' },
};

const Dev_Button_FlexButton = () => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { url, ...otherData } = _data;

  const data = { url: ifEmpty(url, undefined), ...otherData };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          optionProps={_formOptionProps}
          colors={AllColors}
          backgroundColors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{ button: data }}
          onChange={setData}
          onGetTest={() => (
            <FlexButton {...data} row center gap={5} onClick={() => toast.info('클릭')}>
              <Icon size='x3l' color='error'>
                Rocket
              </Icon>
              <Box center>
                <TCaption500 color='primary'>STACK</TCaption500>
                <T>BUTTON</T>
              </Box>
              <Icon size='x3l' color='error'>
                Rocket
              </Icon>
            </FlexButton>
          )}
        />
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_Button_FlexButton);
