import React from 'react';
import { DefaultColors } from '@theme';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import Dev_Tooltip_Variant from './Dev_Tooltip_Variant';
import { FlattenArray } from '@pdg/types';
import code from './Dev_Tooltip.code.md';

const _formOptions = ['tooltipPlace', '|', 'color'] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formDefaultData: Dev_FormOptionsData<DefaultColors> = { size: 'headline' };

export const Dev_Tooltip = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData<DefaultColors>, _formOptions>>({});

  const { tooltipPlace, ...otherData } = _data;

  const data = { place: tooltipPlace, ...otherData };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>툴팁 (Tooltip)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formDefaultData}
          colors={DefaultColors}
          code={code}
          codePropsMap={{ tooltip: data }}
          onChange={setData}
          onGetTest={() => (
            <Box pv={50}>
              <Tooltip isOpen content='툴팁 메시지' {...data}>
                툴팁 표시를 위한 컨트롤
              </Tooltip>
            </Box>
          )}
        />
      </Dev_Panel>

      <Dev_Tooltip_Variant />
    </Panel>
  );
};

export default Dev_Tooltip;
