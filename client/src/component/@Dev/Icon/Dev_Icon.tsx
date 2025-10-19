import React from 'react';
import { AllColors, ButtonColors } from '@theme';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import code from './Dev_Icon.code.md';
import { toast } from '@common';
import Dev_Icon_Variant from './Dev_Icon_Variant';
import Dev_Icon_MaterialIcons from './Dev_Icon_MaterialIcons';
import { FlattenArray } from '@pdg/types';

const _formOptions = [
  'size',
  '|',
  [
    { option: 'color', cols: 5 },
    { option: 'rotate', cols: 3 },
  ],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formDefaultData: Dev_FormOptionsData<ButtonColors> = { size: 'headline' };

export const Dev_Icon = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <Flex row center gap={30}>
        <TTitleLarge700 color='primary'>아이콘 (Icon)</TTitleLarge700>
        <Button
          size='sm'
          color='success'
          onClick={() => window.open('https://mui.com/material-ui/material-icons/', '_blank')}
        >
          아이콘 검색
        </Button>
      </Flex>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formDefaultData}
          colors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{ button: data }}
          onChange={setData}
          onGetTest={() => (
            <Icon {...data} onClick={() => toast.info('클릭')}>
              Rocket
            </Icon>
          )}
        />
      </Dev_Panel>

      <Dev_Icon_Variant />
      <Dev_Icon_MaterialIcons />
    </Panel>
  );
};

export default Dev_Icon;
