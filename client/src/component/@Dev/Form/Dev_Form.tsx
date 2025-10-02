import React from 'react';
import { Form, FormCheckbox, FormProps, Tabs } from '@ccomp';
import Dev_Form_Text from './Text';
import Dev_Form_Email from './Email';
import Dev_Form_Password from './Password';
import Dev_Form_Select from './Select';
import Dev_Form_Checkbox from './Checkbox';
import Dev_Form_RadioGroup from './RadioGroup';
import Dev_Form_ControlGroup from './ControlGroup';
import Dev_Form_Textarea from './Textarea';
import { Dev_Panel } from '../@Common';
import { useLocation } from 'react-router';
import app from '@app';

const TabValue = ['text', 'email', 'password', 'textarea', 'select', 'radioGroup', 'checkbox', 'controlGroup'] as const;
type TabValue = (typeof TabValue)[number];
const TabItems = [
  lv('FormText', 'text'),
  lv('FormEmail', 'email'),
  lv('FormPassword', 'password'),
  lv('FormTextarea', 'textarea'),
  lv('FormSelect', 'select'),
  lv('FormRadioGroup', 'radioGroup'),
  lv('FormCheckbox', 'checkbox'),
  lv('FormControlGroup', 'controlGroup'),
] as Lv<string, TabValue, { disabled?: boolean }>[];

export const Dev_Form = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [activeTab, setActiveTab] = useState<TabValue>('text');
  const [titlePosition, setTitlePosition] = useState<FormProps['titlePosition']>('top');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const hash = app.deHash(location);
    if (hash.sm && TabValue.includes(hash.sm as TabValue)) {
      setActiveTab(hash.sm as TabValue);
    } else {
      setActiveTab('text');
    }
  }, [location]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <Stack row center spacing={30}>
        <TTitleLarge700 color='primary'>Form</TTitleLarge700>
      </Stack>

      <Dev_Panel row spacing={20} borderWidth={1} borderColor='opacity15' borderRadius={10}>
        <Form>
          <FormCheckbox
            name='titlePosition'
            label='왼쪽 타이틀'
            onChange={(checked) => setTitlePosition(checked ? 'left' : 'top')}
          />
        </Form>
      </Dev_Panel>

      <Tabs
        items={TabItems}
        value={activeTab}
        onChange={(v) => {
          v !== activeTab && app.navigate(`#m=form&sm=${v}`);
        }}
      />

      {activeTab === 'text' ? (
        <Dev_Form_Text titlePosition={titlePosition} />
      ) : activeTab === 'email' ? (
        <Dev_Form_Email titlePosition={titlePosition} />
      ) : activeTab === 'password' ? (
        <Dev_Form_Password titlePosition={titlePosition} />
      ) : activeTab === 'textarea' ? (
        <Dev_Form_Textarea titlePosition={titlePosition} />
      ) : activeTab === 'select' ? (
        <Dev_Form_Select titlePosition={titlePosition} />
      ) : activeTab === 'radioGroup' ? (
        <Dev_Form_RadioGroup titlePosition={titlePosition} />
      ) : activeTab === 'checkbox' ? (
        <Dev_Form_Checkbox titlePosition={titlePosition} />
      ) : activeTab === 'controlGroup' ? (
        <Dev_Form_ControlGroup titlePosition={titlePosition} />
      ) : null}
    </Panel>
  );
};

export default Dev_Form;
