import React from 'react';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_FormOptionsProps, Dev_Panel } from '../../@Common';
import { AllColors } from '@theme';
import code from './Dev_Button_TextButton.code.md';
import { toast } from '@common';
import { TextButton } from '@ccomp';
import Dev_Button_TextButton_Variant from './Dev_Button_TextButton_Variant';
import { FlattenArray } from '@pdg/types';

const _formOptions = [
  ['color', 'size'],
  '|',
  ['icon', 'iconSpacing', 'iconPosition'],
  '|',
  'url',
  '|',
  ['loading', 'disabled'],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionProps: Dev_FormOptionsProps['optionProps'] = {
  url: { helperText: 'URL을 입력하면, 클릭 시 자동으로 URL로 이동 (내부 URL은 / 로 시작)' },
};

const Dev_Button_TextButton = () => {
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
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          optionProps={_formOptionProps}
          colors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{ button: data }}
          onChange={setData}
          onGetTest={() => (
            <TextButton {...data} onClick={() => toast.info('클릭')}>
              버튼
            </TextButton>
          )}
        />
      </Dev_Panel>

      <Dev_Button_TextButton_Variant />
    </Stack>
  );
};

export default React.memo(Dev_Button_TextButton);
