import React from 'react';
import { DevProps as Props } from './Dev.types';
import { PageRootContainer, Tabs } from '@ccomp';
import {
  Dev_Alert,
  Dev_Button,
  Dev_Chip,
  Dev_Color,
  Dev_Css,
  Dev_Dialog,
  Dev_ErrorRetry,
  Dev_Form,
  Dev_Grid,
  Dev_Icon,
  Dev_Img,
  Dev_List,
  Dev_LoadingIndicator,
  Dev_Pagination,
  Dev_T,
  Dev_Toast,
  Dev_Tooltip,
} from './sub';
import './Dev.scss';
import app from '@app';
import { useLocation } from 'react-router';

const TabValue = [
  'color',
  'css',
  't',
  'button',
  'icon',
  'img',
  'dialog',
  'loadingIndicator',
  'grid',
  'toast',
  'tooltip',
  'errorRetry',
  'form',
  'alert',
  'pagination',
  'list',
  'chip',
] as const;
type TabValue = (typeof TabValue)[number];
const TabItems = [
  lv('컬러', 'color'),
  lv('CSS', 'css'),
  lv('텍스트', 't'),
  lv('버튼', 'button'),
  lv('아이콘', 'icon'),
  lv('이미지', 'img'),
  lv('그리드', 'grid'),
  lv('다이얼로그', 'dialog'),
  lv('토스트', 'toast'),
  lv('로딩', 'loadingIndicator'),
  lv('툴팁', 'tooltip'),
  lv('오류', 'errorRetry'),
  lv('얼럿', 'alert'),
  lv('페이징', 'pagination'),
  lv('리스트', 'list'),
  lv('칩', 'chip'),
  lv('Form', 'form'),
] as Lv<string, TabValue, { disabled?: boolean }>[];

export const Dev = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [activeTab, setActiveTab] = useState<TabValue>('color');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const hash = app.deHash(location);
    if (hash.m && TabValue.includes(hash.m as any)) {
      setActiveTab(hash.m as TabValue);
    } else {
      setActiveTab('color');
    }
  }, [location]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PageRootContainer className='Dev'>
      <Tabs
        items={TabItems}
        value={activeTab}
        onChange={(v) => {
          v !== activeTab && app.navigate(`#m=${v}`);
        }}
      />

      {activeTab === 'color' ? (
        <Dev_Color />
      ) : activeTab === 'css' ? (
        <Dev_Css />
      ) : activeTab === 't' ? (
        <Dev_T />
      ) : activeTab === 'button' ? (
        <Dev_Button />
      ) : activeTab === 'icon' ? (
        <Dev_Icon />
      ) : activeTab === 'img' ? (
        <Dev_Img />
      ) : activeTab === 'grid' ? (
        <Dev_Grid />
      ) : activeTab === 'dialog' ? (
        <Dev_Dialog />
      ) : activeTab === 'loadingIndicator' ? (
        <Dev_LoadingIndicator />
      ) : activeTab === 'tooltip' ? (
        <Dev_Tooltip />
      ) : activeTab === 'errorRetry' ? (
        <Dev_ErrorRetry />
      ) : activeTab === 'toast' ? (
        <Dev_Toast />
      ) : activeTab === 'form' ? (
        <Dev_Form />
      ) : activeTab === 'alert' ? (
        <Dev_Alert />
      ) : activeTab === 'pagination' ? (
        <Dev_Pagination />
      ) : activeTab === 'list' ? (
        <Dev_List />
      ) : activeTab === 'chip' ? (
        <Dev_Chip />
      ) : null}
    </PageRootContainer>
  );
};

export default Dev;
