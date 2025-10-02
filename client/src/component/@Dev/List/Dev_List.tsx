import React from 'react';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { List } from '@ccomp';
import { FlattenArray } from '@pdg/types';
import code from './Dev_List.code.md';

const _formOptions = [['listType', 'listVariant'], '|', ['title', 'spacing']] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;

const Items = new Array(10).fill(0).map((_, i) => `아이템 ${i + 1}`);

const Dev_List = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { listType, listVariant, ...otherData } = _data;

  const data = { type: listType, variant: listVariant, ...otherData };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>리스트 (List)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          useCustomColor
          code={code}
          codePropsMap={{ props: data }}
          onChange={setData}
          onGetTest={() => (
            <Box fullWidth>
              <List {...data} items={Items} />
            </Box>
          )}
        />
      </Dev_Panel>
    </Panel>
  );
};

export default React.memo(Dev_List);
