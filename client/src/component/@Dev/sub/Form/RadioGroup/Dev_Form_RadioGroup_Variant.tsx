import React from 'react';
import { Form, FormProps, FormRadioGroup } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Items = new Array(10).fill(0).map((_, i) => lv(`아이템 ${i + 1}`, `${i + 1}`, { disabled: i % 3 === 1 }));

const Dev_Form_RadioGroup_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={90} onSubmit={() => ll('submit')}>
        <Stack spacing={15}>
          <FormRadioGroup title='기본' name='FormRadioGroup_default' items={Items} />

          <Divider />

          <FormRadioGroup title='필수 선택' name='FormRadioGroup_required' items={Items} required />

          <Divider />

          <FormRadioGroup title='비활성' name='FormRadioGroup_disabled' items={Items} disabled />

          <Divider />

          <FormRadioGroup
            title='하위 컨트롤'
            name='FormRadioGroup_subControl'
            items={Items}
            subControl={<Button type='button'>버튼</Button>}
          />

          <Divider />

          <FormRadioGroup title='제목 숨김' name='FormRadioGroup_hideTitle' items={Items} hideTitle />

          <Divider />

          <Button type='submit'>Submit</Button>
        </Stack>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_RadioGroup_Variant);
