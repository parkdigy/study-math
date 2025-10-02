import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';

const Dev_T_Variant_FontWeight = () => {
  return (
    <Dev_Panel>
      <Dev_PanelItem title='두께별 컴포넌트' row center spacing={10} wrap>
        <Divider />

        {new Array(9).fill(0).map((_, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <Divider vertical />}
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

const Item = ({ fontWeight }: { fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 }) => {
  const Component =
    fontWeight === 100
      ? T100
      : fontWeight === 200
        ? T200
        : fontWeight === 300
          ? T300
          : fontWeight === 400
            ? T400
            : fontWeight === 500
              ? T500
              : fontWeight === 600
                ? T600
                : fontWeight === 700
                  ? T700
                  : fontWeight === 800
                    ? T800
                    : T900;

  return (
    <Tooltip place='top-start' content={`<${Component.name}>...</${Component.name}>`}>
      <Component>{`<${Component.name}>`}</Component>
    </Tooltip>
  );
};
