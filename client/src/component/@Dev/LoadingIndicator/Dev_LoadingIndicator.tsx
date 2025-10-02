import React from 'react';
import Dev_LoadingIndicator_Variant from './Dev_LoadingIndicator_Variant';
import { FlattenArray } from '@pdg/types';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { AllColors, ButtonColors } from '@theme';
import code from '../Icon/Dev_Icon.code.md';
import { LoadingIndicator } from '@ccomp';

const _formOptions = [['color', 'size']] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formDefaultData: Dev_FormOptionsData<ButtonColors> = { size: 'headline' };

export const Dev_LoadingIndicator = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>로딩 (LoadingIndicator)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formDefaultData}
          colors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{ button: data }}
          onChange={setData}
          onGetTest={() => <LoadingIndicator {...data} />}
        />
      </Dev_Panel>

      <Dev_LoadingIndicator_Variant />
    </Panel>
  );
};

export default Dev_LoadingIndicator;
