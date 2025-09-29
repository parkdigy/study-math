import React from 'react';
import { Tabs } from '@ccomp';
import Dev_Button_Button from './Button';
import Dev_Button_IconButton from './IconButton';
import { Dev_Button_TextButton } from './TextButton';

const TabValue = ['button', 'iconButton', 'textButton'] as const;
type TabValue = (typeof TabValue)[number];
const TabItems = [lv('Button', 'button'), lv('IconButton', 'iconButton'), lv('TextButton', 'textButton')] as Lv<
  string,
  TabValue,
  { disabled?: boolean }
>[];

export const Dev_Button = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [activeTab, setActiveTab] = useState<TabValue>('button');

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>Button (버튼)</TTitleLarge700>

      <Tabs items={TabItems} value={activeTab} onChange={setActiveTab} />

      {activeTab === 'button' ? (
        <Dev_Button_Button />
      ) : activeTab === 'iconButton' ? (
        <Dev_Button_IconButton />
      ) : activeTab === 'textButton' ? (
        <Dev_Button_TextButton />
      ) : null}
    </Panel>
  );
};

export default Dev_Button;
