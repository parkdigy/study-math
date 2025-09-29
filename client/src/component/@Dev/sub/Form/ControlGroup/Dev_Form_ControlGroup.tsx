import React from 'react';
import { Form, FormCheckbox, FormControlGroup, FormProps, FormSelect } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: FormProps['titlePosition'];
}

const Items = new Array(20).fill(0).map((_, i) => lv(`아이템 ${i + 1}`, `${i + 1}`, { disabled: i % 3 === 1 }));

export const Dev_Form_ControlGroup = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={130} onSubmit={() => ll('submit')}>
        <Stack spacing={15}>
          <FormControlGroup title='FormControlGroup' showControlError>
            <Stack flex={1} row center spacing={10}>
              <FormSelect
                flex={1}
                title='선택'
                name='FormSelect'
                items={Items}
                searchable
                required
                placeholder='선택'
              />
              <FormCheckbox title='체크박스' name='FormCheckbox'>
                체크박스
              </FormCheckbox>
            </Stack>
          </FormControlGroup>

          <Button type='submit'>Submit</Button>
        </Stack>
      </Form>
    </Dev_Panel>
  );
};

export default Dev_Form_ControlGroup;
