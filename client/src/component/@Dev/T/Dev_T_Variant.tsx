import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { AllColors, AllSizes } from '@theme';

const Dev_T_Colors = () => {
  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_PanelItem title='색상별' row center gap={10} wrap>
          <Divider />

          <Tooltip place='top-start' content='<T>...</T>'>
            <T>기본</T>
          </Tooltip>

          {AllColors.map((color, idx) => (
            <React.Fragment key={idx}>
              <Divider vertical />
              <Tooltip place='top-start' content={`<T color="${color}">...</T>`}>
                <T color={color}>{color}</T>
              </Tooltip>
            </React.Fragment>
          ))}
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='크기별' row center gap={10} wrap>
          <Divider />

          {AllSizes.map((size, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <Divider vertical />}
              <Tooltip
                place='top-start'
                content={
                  <>
                    <div>{`<T size="${size}">...</T>`}</div>
                  </>
                }
              >
                <T size={size}>{size}</T>
              </Tooltip>
            </React.Fragment>
          ))}
        </Dev_PanelItem>
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_T_Colors);
