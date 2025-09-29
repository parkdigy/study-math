import React from 'react';
import { AllColors } from '@theme';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import code from './Dev_T.code.md';
import Dev_T_Variant_FontWeight from './Dev_T_Variant_FontWeight';
import Dev_T_Variant_Size_FontWeight from './Dev_T_Variant_Size_FontWeight';
import Dev_T_Variant from './Dev_T_Variant';
import { FlattenArray } from '@pdg/types';
import Dev_T_Variant_Color from './Dev_T_Variant_Color';

const _formOptions = [['color', 'fontWeight'], '|', ['size'], '|', ['icon', 'iconSpacing', 'iconPosition']] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;

export const Dev_T = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>텍스트 (T)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          colors={AllColors}
          useCustomColor
          backgroundColors={AllColors}
          useCustomBackgroundColor
          code={code}
          codePropsMap={{ t: data }}
          onChange={setData}
          onGetTest={() => <T {...data}>텍스트</T>}
        />
      </Dev_Panel>

      <Dev_T_Variant />
      <Dev_T_Variant_Color />
      <Dev_T_Variant_FontWeight />
      <Dev_T_Variant_Size_FontWeight />
    </Panel>
  );
};

export default Dev_T;
