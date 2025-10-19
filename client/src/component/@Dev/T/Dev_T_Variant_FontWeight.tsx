import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';

const Dev_T_Variant_FontWeight = () => {
  return (
    <Dev_Panel>
      <Dev_PanelItem title='두께별 컴포넌트' row center gap={10} wrap>
        <Divider />

        <Item fontWeight={'bold'} />

        {new Array(9).fill(0).map((_, idx) => (
          <React.Fragment key={idx}>
            <Divider vertical />
            <Item fontWeight={((idx + 1) * 100) as any} />
          </React.Fragment>
        ))}
      </Dev_PanelItem>
    </Dev_Panel>
  );
};

export default React.memo(Dev_T_Variant_FontWeight);

/********************************************************************************************************************
 * Item
 * ******************************************************************************************************************/

const Item = ({ fontWeight }: { fontWeight: 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 }) => {
  const componentName = `T${fontWeight === 'bold' ? 'Bold' : fontWeight}`;

  return (
    <Tooltip place='top-start' content={`<${componentName}>...</${componentName}>`}>
      <T fw={fontWeight}>{`<${componentName}>`}</T>
    </Tooltip>
  );
};
