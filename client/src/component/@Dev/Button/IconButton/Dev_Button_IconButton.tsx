import React from 'react';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_FormOptionsProps, Dev_Panel } from '../../@Common';
import { AllColors, ButtonColors } from '@theme';
import code from './Dev_Button_IconButton.code.md';
import { toast } from '@common';
import Dev_Button_IconButton_Variant from './Dev_Button_IconButton_Variant';
import { FlattenArray } from '@pdg/types';

const _formOptions = [
  'iconButtonVariant',
  '|',
  'size',
  '|',
  ['color', 'backgroundColor'],
  '|',
  'url',
  '|',
  'disabled',
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formDefaultData: Dev_FormOptionsData<ButtonColors> = { size: 'headline' };
const _formOptionProps: Dev_FormOptionsProps['optionProps'] = {
  url: { helperText: 'URL을 입력하면, 클릭 시 자동으로 URL로 이동 (내부 URL은 / 로 시작)' },
};

const Dev_Button_IconButton = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData<ButtonColors>, _formOptions>>({});

  const { iconButtonVariant: variant, url, ...otherData } = _data;

  const data = { variant, url: ifEmpty(url, undefined), ...otherData };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          optionProps={_formOptionProps}
          colors={ButtonColors}
          useCustomColor
          backgroundColors={AllColors}
          useCustomBackgroundColor
          code={code}
          codePropsMap={{ iconButton: data }}
          defaultData={_formDefaultData}
          onChange={setData}
          onGetTest={() => (
            <IconButton {...data} onClick={() => toast.info('클릭')}>
              RocketLaunch
            </IconButton>
          )}
        />
      </Dev_Panel>

      <Dev_Button_IconButton_Variant />
    </Stack>
  );
};

export default Dev_Button_IconButton;
