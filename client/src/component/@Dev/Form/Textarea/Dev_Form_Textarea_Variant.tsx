import React from 'react';
import { Form, FormProps, FormTextarea } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Dev_Form_Textarea_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={70} gap={15} onSubmit={() => ll('submit')}>
        <FormTextarea title='문장' name='FormTextarea_default' placeholder='기본' />

        <FormTextarea title='문장' name='FormTextarea_required' placeholder='필수 입력' required />

        <FormTextarea title='문장' name='FormTextarea_disabled' placeholder='비활성' disabled />

        <FormTextarea
          title='문장'
          name='FormTextarea_subControl'
          placeholder='하위 컨트롤'
          subControl={<Button type='button'>버튼</Button>}
        />

        <FormTextarea title='문장' name='FormTextarea_hideTitle' placeholder='제목 숨김' hideTitle />

        <Button type='submit'>Submit</Button>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_Textarea_Variant);
