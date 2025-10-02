import React from 'react';
import { FlattenArray } from '@pdg/types';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { AllColors } from '@theme';
import code from './Dev_Chip.code.md';
import { Chip } from '@ccomp';
import { toast } from '@toast';

const _formOptions = [
  ['chipVariant', 'label'],
  '|',
  'size',
  '|',
  ['color', 'backgroundColor'],
  '|',
  ['onClick', 'onRemoveClick'],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = { label: 'Chip' };

export const Dev_Chip = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { chipVariant, label, onClick, onRemoveClick, ...otherData } = _data;

  const data = { variant: chipVariant, label: ifUndefined(label, ''), ...otherData };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>Chip</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionsDefaultData}
          colors={AllColors}
          backgroundColors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{
            props: {
              ...data,
              onClick: onClick ? '{...}' : undefined,
              onRemoveClick: onRemoveClick ? '{...}' : undefined,
            },
          }}
          onChange={setData}
          onGetTest={() => (
            <Chip
              onClick={onClick ? () => toast.info('클릭') : undefined}
              onRemoveClick={onRemoveClick ? () => toast.info('삭제 클릭') : undefined}
              {...data}
            />
          )}
        />
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Chip;
