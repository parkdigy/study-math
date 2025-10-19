import React from 'react';
import { FormProps, FormRadioGroup } from '@ccomp';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../../@Common';
import { FlattenArray } from '@pdg/types';
import code from './Dev_Form_RadioGroup.code.md';
import Dev_Form_RadioGroup_Variant from './Dev_Form_RadioGroup_Variant';

const _formOptions = [
  ['formRadioGroupType', 'gap'],
  '|',
  ['title', 'helperText'],
  '|',
  ['required', 'disabled', 'hideTitle'],
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

  const { formRadioGroupType, title, helperText, ...otherData } = _data;

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
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionsDefaultData}
          formProps={{ titlePosition }}
          code={code}
          codePropsMap={{ props: { ...data } }}
          onChange={setData}
          onGetTest={() => (
            <Flex gap={20} fullWidth>
              <FormRadioGroup name='FormRadioGroup' titleWidth={120} items={Items} {...data} />
              <Button>Submit</Button>
            </Flex>
          )}
        />
      </Dev_Panel>

      <Dev_Form_RadioGroup_Variant titlePosition={titlePosition} />
    </Flex>
  );
};

export default Dev_Form_RadioGroup;
