import React from 'react';
import { FormCheckbox, FormProps } from '@ccomp';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../../@Common';
import Dev_Form_Checkbox_Variant from './Dev_Form_Checkbox_Variant';
import { FlattenArray } from '@pdg/types';
import code from './Dev_Form_Checkbox.code.md';
import { toast } from '@common';

const _formOptions = [
  'formCheckboxType',
  '|',
  ['title', 'label'],
  '|',
  'helperText',
  '|',
  ['disabled', 'subControl', 'hideTitle'],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = {
  title: 'FormRadioGroup',
  label: '체크박스',
};

interface Props {
  titlePosition: FormProps['titlePosition'];
}

export const Dev_Form_Checkbox = ({ titlePosition }: Props) => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { subControl, formCheckboxType, title, label, helperText, ...otherData } = _data;

  const data = {
    type: formCheckboxType,
    title: ifEmpty(title, undefined),
    label: ifEmpty(label, undefined),
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
              <FormCheckbox
                name='FormCheckbox'
                titleWidth={120}
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

      <Dev_Form_Checkbox_Variant titlePosition={titlePosition} />
    </Stack>
  );
};

export default Dev_Form_Checkbox;
