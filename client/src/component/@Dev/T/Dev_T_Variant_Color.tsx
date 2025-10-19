import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { DefaultColors, OpacityColors, OpacityReverseColors, TextColors } from '@theme';
import util from '@util';

const Dev_T_Variant_Color = () => {
  return (
    <Dev_Panel>
      <Dev_PanelItem title='색상별 컴포넌트' row center gap={10} wrap>
        <Divider />

        {[...TextColors, ...DefaultColors, ...OpacityColors, ...OpacityReverseColors].map((color, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <Divider vertical />}
            <Item color={color} />
          </React.Fragment>
        ))}
      </Dev_PanelItem>
    </Dev_Panel>
  );
};

export default React.memo(Dev_T_Variant_Color);

/********************************************************************************************************************
 * Item
 * ******************************************************************************************************************/

const Item = ({ color }: { color: string }) => {
  let componentName = util.text.snakeToCamelCase(color);
  componentName = `T${componentName.substring(0, 1).toUpperCase()}${componentName.substring(1)}`;
  if (componentName.startsWith('TText')) {
    componentName = componentName.replace('TText', 'T');
  }

  return (
    <Tooltip place='top-start' content={`<${componentName}>...</${componentName}>`}>
      <T color={color}>{`<${componentName}>`}</T>
    </Tooltip>
  );
};
