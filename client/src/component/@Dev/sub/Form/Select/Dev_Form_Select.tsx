import React from 'react';
import { FormProps, FormSelect } from '@ccomp';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../../@Common';
import { FlattenArray } from '@pdg/types';
import code from './Dev_Form_Select.code.md';
import { toast } from '@common';
import Dev_Form_Select_Variant from './Dev_Form_Select_Variant';

const _formOptions = [
  ['title', 'placeholder'],
  '|',
  'helperText',
  '|',
  ['loading', 'clearable', 'required', 'disabled'],
  ['subControl', 'hideTitle', null, null],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = {
  title: 'FormSelect',
  placeholder: '선택해 주세요',
};

const Items = new Array(20).fill(0).map((_, i) => lv(`아이템 ${i + 1}`, `${i + 1}`, { disabled: i % 3 === 1 }));

interface Props {
  titlePosition: FormProps['titlePosition'];
}

export const Dev_Form_Select = ({ titlePosition }: Props) => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { subControl, title, placeholder, helperText, ...otherData } = _data;

  const data = {
    title: ifEmpty(title, undefined),
    placeholder: ifEmpty(placeholder, undefined),
    helperText: ifEmpty(helperText, undefined),
    ...otherData,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionsDefaultData}
          formProps={{ titlePosition }}
          code={code}
          codePropsMap={{ props: { ...data, subControl: subControl ? '{...}' : undefined } }}
          onChange={setData}
          onGetTest={() => (
            <Stack spacing={20} fullWidth>
              <FormSelect
                name='FormSelect'
                titleWidth={90}
                items={Items}
                subControl={
                  subControl ? (
                    <Button type='button' onClick={() => toast.info('하위 컨트롤 클릭')}>
                      하위 컨트롤
                    </Button>
                  ) : undefined
                }
                {...data}
              />
              <Button>Submit</Button>
            </Stack>
          )}
        />
      </Dev_Panel>

      <Dev_Form_Select_Variant titlePosition={titlePosition} />
    </Stack>
  );
};

export default Dev_Form_Select;
