import React from 'react';
import code from './Dev_Grid.code.md';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { FlattenArray } from '@pdg/types';

const _formOptions = ['cols', '|', 'gap'] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = { gap: 5 };

export const Dev_Grid = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>그리드 (Grid)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionsDefaultData}
          testPosition='bottom'
          code={code}
          codePropsMap={{ grid: data }}
          onChange={setData}
          onGetTest={() => (
            <Box fullWidth>
              <Grid {...data}>
                {new Array(24).fill(0).map((_, idx) => (
                  <Col key={idx} bg='opacity05' center pv={5}>
                    {idx + 1}
                  </Col>
                ))}
              </Grid>
            </Box>
          )}
        />
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Grid;
