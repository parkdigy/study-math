import React from 'react';
import { Form, FormCheckbox, FormProps } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Dev_Form_Checkbox_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={140} spacing={15} onSubmit={() => ll('submit')}>
        <FormCheckbox title='체크박스' name='FormCheckbox_default' label='기본' />

        <Divider />

        <FormCheckbox title='체크박스' name='FormCheckbox_disabled' label='비활성' disabled />

        <Divider />

        <FormCheckbox
          title='체크박스'
          name='FormCheckbox_subControl'
          label='하위 컨트롤'
          subControl={
            <Button type='button' size='sm'>
              버튼
            </Button>
          }
        />

        <Divider />

        <FormCheckbox title='체크박스' name='FormCheckbox_hideTitle' label='제목 숨김' hideTitle />

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

        <FormCheckbox
          type='switch'
          title='스위치 - 제목 숨김'
          name='FormCheckbox_switch_hideTitle'
          hideTitle
          label='제목 숨김'
        />

        <Divider />

        <Button type='submit'>Submit</Button>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_Checkbox_Variant);
