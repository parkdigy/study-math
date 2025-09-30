import React from 'react';
import { FormProps, FormRadioGroup } from '@ccomp';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../../@Common';
import { FlattenArray } from '@pdg/types';
import code from './Dev_Form_RadioGroup.code.md';
import { toast } from '@common';
import Dev_Form_RadioGroup_Variant from './Dev_Form_RadioGroup_Variant';

const _formOptions = [
  ['formRadioGroupType', 'spacing'],
  '|',
  ['title', 'helperText'],
  '|',
  ['required', 'disabled', 'subControl', 'hideTitle'],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = {
  title: 'FormRadioGroup',
};

interface Props {
  titlePosition: FormProps['titlePosition'];
}

const Items = new Array(10).fill(0).map((_, i) => lv(`아이템 ${i + 1}`, `${i + 1}`, { disabled: i % 3 === 1 }));

export const Dev_Form_RadioGroup = ({ titlePosition }: Props) => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { subControl, formRadioGroupType, title, helperText, ...otherData } = _data;

  const data = {
    type: formRadioGroupType,
    title: ifEmpty(title, undefined),
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
              <FormRadioGroup
                name='FormRadioGroup'
                titleWidth={120}
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

      <Dev_Form_RadioGroup_Variant titlePosition={titlePosition} />
    </Stack>
  );
};

export default Dev_Form_RadioGroup;
