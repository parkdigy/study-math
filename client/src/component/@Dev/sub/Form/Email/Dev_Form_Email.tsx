import React from 'react';
import { FormEmail, FormProps } from '@ccomp';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../../@Common';
import { FlattenArray } from '@pdg/types';
import Dev_Form_Email_Variant from './Dev_Form_Email_Variant';
import code from './Dev_Form_Email.code.md';
import { toast } from '@common';

const _formOptions = [['title', 'placeholder'], '|', ['required', 'disabled', 'subControl', 'hideTitle']] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = {
  title: '이메일',
  placeholder: '이메일을 입력해 주세요',
};

interface Props {
  titlePosition: FormProps['titlePosition'];
}

export const Dev_Form_Email = ({ titlePosition }: Props) => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { subControl, ...data } = _data;

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
              <FormEmail
                name='FormEmail'
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

      <Dev_Form_Email_Variant titlePosition={titlePosition} />
    </Stack>
  );
};

export default Dev_Form_Email;
