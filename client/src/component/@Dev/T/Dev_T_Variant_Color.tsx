import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { DefaultColors, TextColors } from '@theme';

const Dev_T_Variant_Color = () => {
  return (
    <Dev_Panel>
      <Dev_PanelItem title='색상별 컴포넌트' row center spacing={10} wrap>
        <Divider />

        {[...TextColors, ...DefaultColors].map((color, idx) => (
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

const Item = ({ color }: { color: DefaultColors | TextColors }) => {
  const Component =
    color === 'primary'
      ? TPrimary
      : color === 'secondary'
        ? TSecondary
        : color === 'success'
          ? TSuccess
          : color === 'warning'
            ? TWarning
            : color === 'error'
              ? TError
              : color === 'text'
                ? T
                : color === 'textAccent'
                  ? TAccent
                  : color === 'textBlurry'
                    ? TBlurry
                    : color === 'textLighten'
                      ? TLighten
                      : null;

  return Component ? (
    <Tooltip place='top-start' content={`<${Component.name}>...</${Component.name}>`}>
      <Component>{`<${Component.name}>`}</Component>
    </Tooltip>
  ) : null;
};
