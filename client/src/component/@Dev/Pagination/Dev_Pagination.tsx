import React from 'react';
import { FlattenArray } from '@pdg/types';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import code from './Dev_Pagination.code.md';
import { Pagination } from '@ccomp';

const _formOptions = ['currentPage', '|', 'lastPage'] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = {
  currentPage: 1,
  lastPage: 100,
};

export const Dev_Pagination = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { currentPage, lastPage } = _data;

  const data = { paging: { current_page: currentPage!, last_page: lastPage! } };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>페이징 (Pagination)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionsDefaultData}
          code={code}
          codePropsMap={{ props: data }}
          onChange={setData}
          onGetTest={() => <Pagination {...data} />}
        />
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Pagination;
