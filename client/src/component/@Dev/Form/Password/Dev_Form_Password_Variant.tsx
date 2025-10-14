import React from 'react';
import { Form, FormPassword, FormProps } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Dev_Form_Password_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={100} spacing={15} onSubmit={() => ll('submit')}>
        <FormPassword title='비밀번호' name='FormPassword_default' placeholder='기본' />

        <FormPassword title='비밀번호' name='FormPassword_rules' placeholder='규칙 적용' rules />

        <FormPassword title='비밀번호' name='FormPassword_required' placeholder='필수 입력' required />

        <FormPassword
          title='비밀번호 확인'
          name='FormPassword_linkName'
          placeholder='비밀번호 확인'
          required
          linkName='FormPassword_required'
        />

        <FormPassword title='비밀번호' name='FormPassword_disabled' placeholder='비활성' disabled />

        <FormPassword
          title='비밀번호'
          name='FormPassword_subControl'
          placeholder='하위 컨트롤'
          subControl={<Button type='button'>버튼</Button>}
        />

        <FormPassword title='비밀번호' name='FormPassword_hideTitle' placeholder='제목 숨김' hideTitle />

        <Button type='submit'>Submit</Button>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_Password_Variant);
