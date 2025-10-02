import React from 'react';
import { Form, FormProps, FormSelect } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Items = new Array(20).fill(0).map((_, i) => lv(`아이템 ${i + 1}`, `${i + 1}`, { disabled: i % 3 === 1 }));

const Dev_Form_Select_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={60} onSubmit={() => ll('submit')}>
        <Stack spacing={15}>
          <FormSelect title='선택' name='FormSelect_default' placeholder='선택해 주세요' items={Items} />

          <FormSelect
            title='선택'
            name='FormSelect_clearable'
            placeholder='선택 해제 가능'
            items={Items}
            value={'1'}
            clearable
          />

          <FormSelect title='선택' name='FormSelect_required' placeholder='필수 선택' items={Items} required />

          <FormSelect title='선택' name='FormSelect_disabled' placeholder='비활성' items={Items} disabled />

          <FormSelect title='선택' name='FormSelect_searchable' placeholder='검색 가능' items={Items} searchable />

          <FormSelect title='선택' name='FormSelect_loading' placeholder='로딩' loading searchable />

          <FormSelect
            title='선택'
            name='FormSelect_subControl'
            placeholder='하위 컨트롤'
            items={Items}
            subControl={<Button type='button'>버튼</Button>}
          />

          <FormSelect title='선택' name='FormSelect_hideTitle' placeholder='제목 숨김' items={Items} hideTitle />

          <Button type='submit'>Submit</Button>
        </Stack>
      </Form>
    </Dev_Panel>
  );
};

export default React.memo(Dev_Form_Select_Variant);
