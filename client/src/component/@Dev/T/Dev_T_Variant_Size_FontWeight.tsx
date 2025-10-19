import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { FriendlyNameSizes } from '@theme';
import util from '@util';

const Dev_T_Variant_Size_FontWeight = () => {
  return (
    <Dev_Panel>
      <Dev_PanelItem title='크기/두께별 컴포넌트' row center gap={10} wrap>
        {FriendlyNameSizes.map((size, idx) => (
          <React.Fragment key={idx}>
            <Divider />
            <Flex row center gap={10} wrap>
              <Item size={size} />
              <Divider vertical />
              <Item size={size} fontWeight='bold' />
              {new Array(9).fill(0).map((_, idx) => (
                <React.Fragment key={idx}>
                  <Divider vertical />
                  <Item size={size} fontWeight={((idx + 1) * 100) as any} />
                </React.Fragment>
              ))}
            </Flex>
          </React.Fragment>
        ))}
      </Dev_PanelItem>
    </Dev_Panel>
  );
};

export default React.memo(Dev_T_Variant_Size_FontWeight);

/********************************************************************************************************************
 * Item
 * ******************************************************************************************************************/

const Item = ({
  size,
  fontWeight,
}: {
  size: FriendlyNameSizes;
  fontWeight?: 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}) => {
  const camelCase = util.css.toVariableName(size);
  let componentName = `T${camelCase.charAt(0).toUpperCase() + camelCase.slice(1)}`;
  if (fontWeight) {
    componentName += fontWeight === 'bold' ? 'Bold' : fontWeight;
  }

  return (
    <Tooltip place='top-start' content={`<${componentName}>...</${componentName}>`}>
      <T size={size} fw={fontWeight} wordBreak='break-all'>{`<${componentName}>`}</T>
    </Tooltip>
  );
};
