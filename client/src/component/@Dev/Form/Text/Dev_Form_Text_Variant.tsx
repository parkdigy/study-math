import React from 'react';
import { Form, FormProps, FormText } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Dev_Form_Text_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={70} gap={15} onSubmit={() => ll('submit')}>
        <FormText title='텍스트' name='FormText_default' placeholder='기본' />

        <FormText title='텍스트' name='FormText_required' placeholder='필수 입력' required />

        <FormText title='텍스트' name='FormText_disabled' placeholder='비활성' disabled />

        <FormText
          title='텍스트'
          name='FormText_subControl'
          placeholder='하위 컨트롤'
          subControl={<Button type='button'>버튼</Button>}
        />

        <FormText title='텍스트' name='FormText_hideTitle' placeholder='제목 숨김' hideTitle />

        <Button type='submit'>Submit</Button>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_Text_Variant);
