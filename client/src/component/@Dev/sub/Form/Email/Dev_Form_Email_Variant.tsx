import React from 'react';
import { Form, FormEmail, FormProps } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Dev_Form_Email_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={70} onSubmit={() => ll('submit')}>
        <Stack spacing={15}>
          <FormEmail title='이메일' name='FormEmail_default' placeholder='기본' />

          <FormEmail title='이메일' name='FormEmail_required' placeholder='필수 입력' required />

          <FormEmail title='이메일' name='FormEmail_disabled' placeholder='비활성' disabled />

          <FormEmail
            title='이메일'
            name='FormEmail_subControl'
            placeholder='하위 컨트롤'
            subControl={<Button type='button'>버튼</Button>}
          />

          <FormEmail title='이메일' name='FormEmail_hideTitle' placeholder='제목 숨김' hideTitle />

          <Button type='submit'>Submit</Button>
        </Stack>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_Email_Variant);
