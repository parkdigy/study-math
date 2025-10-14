import React from 'react';
import { Form, FormCheckbox, FormControlGroup, FormProps, FormSelect, FormText } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: FormProps['titlePosition'];
}

const Items = new Array(20).fill(0).map((_, i) => lv(`아이템 ${i + 1}`, `${i + 1}`, { disabled: i % 3 === 1 }));

export const Dev_Form_ControlGroup = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={130} spacing={15} onSubmit={() => ll('submit')}>
        <FormControlGroup title='FormControlGroup' showControlError>
          <Stack flex={1} row center wrap spacing={10}>
            <FormText flex={1} title='FormText' name='FormText' placeholder='텍스트' required />
            <FormSelect
              flex={1}
              title='FormSelect'
              name='FormSelect'
              items={Items}
              searchable
              required
              placeholder='선택'
            />
            <FormCheckbox title='체크박스' name='FormCheckbox' label='체크박스' />
          </Stack>
        </FormControlGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </Dev_Panel>
  );
};

export default Dev_Form_ControlGroup;
