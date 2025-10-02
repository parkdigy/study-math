import React from 'react';
import Dev_ErrorRetry_Variant from './Dev_ErrorRetry_Variant';
import { FlattenArray } from '@pdg/types';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { DefaultColors } from '@theme';
import code from './Dev_ErrorRetry.code.md';
import { ErrorRetry } from '@ccomp';
import { toast } from '@toast';

const _formOptions = ['color', '|', 'title', 'message', '|', 'onRetry'] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;

export const Dev_ErrorRetry = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData<DefaultColors>, _formOptions>>({});

  const { message, onRetry, ...data } = _data;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>오류 (ErrorRetry)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          colors={DefaultColors}
          code={code}
          codePropsMap={{
            errorRetry: {
              message: empty(message) ? undefined : `{'${message.replace(/\n/g, '\\n')}'}`,
              ...data,
              onRetry: onRetry ? '{...}' : undefined,
            },
          }}
          testPosition='bottom'
          onChange={setData}
          onGetTest={() => (
            <Box pv={50}>
              <ErrorRetry
                {...{ message: ifEmpty(message, undefined), ...data }}
                onRetry={onRetry ? () => toast.info('재시도') : undefined}
              />
            </Box>
          )}
        />
      </Dev_Panel>

      <Dev_ErrorRetry_Variant />
    </Panel>
  );
};

export default Dev_ErrorRetry;
