import React from 'react';
import { FormPassword, FormProps } from '@ccomp';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../../@Common';
import { FlattenArray } from '@pdg/types';
import code from './Dev_Form_Password.code.md';
import { toast } from '@common';
import Dev_Form_Password_Variant from './Dev_Form_Password_Variant';

const _formOptions = [
  ['title', 'placeholder'],
  '|',
  'helperText',
  '|',
  ['rules', 'required', 'disabled', 'subControl', 'hideTitle'],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = {
  title: 'FormPassword',
  placeholder: '입력해 주세요',
};

interface Props {
  titlePosition: FormProps['titlePosition'];
}

export const Dev_Form_Password = ({ titlePosition }: Props) => {
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
              <FormPassword
                name='FormPassword'
                titleWidth={110}
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

      <Dev_Form_Password_Variant titlePosition={titlePosition} />
    </Stack>
  );
};

export default Dev_Form_Password;
