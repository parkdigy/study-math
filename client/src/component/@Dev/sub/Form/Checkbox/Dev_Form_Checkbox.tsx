import React from 'react';
import { Form, FormCheckbox, FormProps } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: FormProps['titlePosition'];
}

export const Dev_Form_Checkbox = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={140} onSubmit={() => ll('submit')}>
        <Stack spacing={15}>
          <Divider />

          <FormCheckbox title='체크박스' name='FormCheckbox_default'>
            기본
          </FormCheckbox>

          <Divider />

          <FormCheckbox title='체크박스' name='FormCheckbox_disabled' disabled>
            비활성
          </FormCheckbox>

          <Divider />

          <FormCheckbox
            title='체크박스'
            name='FormCheckbox_subControl'
            subControl={
              <Button type='button' size='sm'>
                버튼
              </Button>
            }
          >
            하위 컨트롤
          </FormCheckbox>

          <Divider />

          <FormCheckbox title='체크박스' name='FormCheckbox_hideTitle' hideTitle>
            제목 숨김
          </FormCheckbox>

          <Divider />

          <FormCheckbox type='switch' title='스위치 - 기본' name='FormCheckbox_switch_default' />

          <Divider />

          <FormCheckbox type='switch' title='스위치 - 비활성' name='FormCheckbox_switch_disabled' disabled />

          <Divider />

          <FormCheckbox
            type='switch'
            title='스위치 - 하위 컨트롤'
            name='FormCheckbox_switch_subControl'
            subControl={
              <Button type='button' size='sm'>
                버튼
              </Button>
            }
          />

          <Divider />

          <FormCheckbox type='switch' title='스위치 - 제목 숨김' name='FormCheckbox_switch_hideTitle' hideTitle />

          <Divider />

          <Button type='submit'>Submit</Button>
        </Stack>
      </Form>
    </Dev_Panel>
  );
};

export default Dev_Form_Checkbox;
