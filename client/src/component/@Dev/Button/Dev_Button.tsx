import React from 'react';
import { Tabs } from '@ccomp';
import Dev_Button_Button from './Button';
import Dev_Button_IconButton from './IconButton';
import { Dev_Button_TextButton } from './TextButton';
import { Dev_Button_FlexButton } from './FlexButton';
import { useLocation } from 'react-router';
import app from '@app';
import { Dev_Button_BoxButton } from './BoxButton';

const TabValue = ['button', 'iconButton', 'textButton', 'stackButton', 'boxButton'] as const;
type TabValue = (typeof TabValue)[number];
const TabItems = [
  lv('Button', 'button'),
  lv('IconButton', 'iconButton'),
  lv('TextButton', 'textButton'),
  lv('FlexButton', 'stackButton'),
  lv('BoxButton', 'boxButton'),
] as Lv<string, TabValue, { disabled?: boolean }>[];

export const Dev_Button = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [activeTab, setActiveTab] = useState<TabValue>('button');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const hash = app.deHash(location);
    if (hash.sm && TabValue.includes(hash.sm as TabValue)) {
      setActiveTab(hash.sm as TabValue);
    } else {
      setActiveTab('button');
    }
  }, [location]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>Button (버튼)</TTitleLarge700>

      <Tabs
        items={TabItems}
        value={activeTab}
        onChange={(v) => {
          v !== activeTab && __navigate(`#m=button&sm=${v}`);
        }}
      />

      {activeTab === 'button' ? (
        <Dev_Button_Button />
      ) : activeTab === 'iconButton' ? (
        <Dev_Button_IconButton />
      ) : activeTab === 'textButton' ? (
        <Dev_Button_TextButton />
      ) : activeTab === 'stackButton' ? (
        <Dev_Button_FlexButton />
      ) : activeTab === 'boxButton' ? (
        <Dev_Button_BoxButton />
      ) : null}
    </Panel>
  );
};

export default Dev_Button;
