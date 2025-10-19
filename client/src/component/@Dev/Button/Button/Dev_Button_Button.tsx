import React from 'react';
import { AllColors, ButtonColors } from '@theme';
import Dev_Button_Button_Variant from './Dev_Button_Button_Variant';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_FormOptionsProps, Dev_Panel } from '../../@Common';
import code from './Dev_Button_Button.code.md';
import { toast } from '@toast';
import { FlattenArray } from '@pdg/types';

const _formOptions = [
  ['buttonVariant', 'buttonSize'],
  '|',
  ['color', 'backgroundColor'],
  '|',
  ['icon', 'iconGap', 'iconPosition'],
  '|',
  'url',
  '|',
  ['loading', 'disabled', 'reverse'],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionProps: Dev_FormOptionsProps['optionProps'] = {
  url: { helperText: 'URL을 입력하면, 클릭 시 자동으로 URL로 이동 (내부 URL은 / 로 시작)' },
};

const Dev_Button_Button = () => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { buttonVariant: variant, buttonSize: size, url, ...otherData } = _data;

  const data = { variant, size, url: ifEmpty(url, undefined), ...otherData };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          optionProps={_formOptionProps}
          colors={ButtonColors}
          useCustomColor
          backgroundColors={AllColors}
          useCustomBackgroundColor
          code={code}
          codePropsMap={{ button: data }}
          onChange={setData}
          onGetTest={() => (
            <Button {...data} onClick={() => toast.info('클릭')}>
              버튼
            </Button>
          )}
        />
      </Dev_Panel>

      <Dev_Button_Button_Variant />
    </Flex>
  );
};

export default React.memo(Dev_Button_Button);
