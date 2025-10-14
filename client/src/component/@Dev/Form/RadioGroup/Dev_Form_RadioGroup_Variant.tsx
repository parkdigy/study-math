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
      <Form titlePosition={titlePosition} titleWidth={90} spacing={15} onSubmit={() => ll('submit')}>
        <FormRadioGroup title='기본' name='FormRadioGroup_default' items={Items} />

        <Divider />

        <FormRadioGroup title='필수 선택' name='FormRadioGroup_required' items={Items} required />

        <Divider />

        <FormRadioGroup title='비활성' name='FormRadioGroup_disabled' items={Items} disabled />

        <Divider />

        <FormRadioGroup type='button' title='button - 기본' name='FormRadioGroup_button_default' items={Items} />

        <Divider />

        <FormRadioGroup
          type='button'
          title='button - 필수 선택'
          name='FormRadioGroup_button_required'
          items={Items}
          required
        />

        <Divider />

        <FormRadioGroup
          type='button'
          title='button - 비활성'
          name='FormRadioGroup_smallButton_disabled'
          items={Items}
          disabled
        />

        <Divider />

        <FormRadioGroup
          type='smallButton'
          title='smallButton - 기본'
          name='FormRadioGroup_smallButton_default'
          items={Items}
        />

        <Divider />

        <FormRadioGroup
          type='smallButton'
          title='smallButton - 필수 선택'
          name='FormRadioGroup_smallButton_required'
          items={Items}
          required
        />

        <Divider />

        <FormRadioGroup
          type='smallButton'
          title='smallButton - 비활성'
          name='FormRadioGroup_smallButton_disabled'
          items={Items}
          disabled
        />

        <Divider />

        <Button type='submit'>Submit</Button>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_RadioGroup_Variant);
