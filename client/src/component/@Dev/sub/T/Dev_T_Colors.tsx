import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { AllColors } from '@theme';

const Dev_T_Colors = () => {
  return (
    <Dev_Panel>
      <Dev_PanelItem title='색상 (color)' row center spacing={10} wrap>
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
  );
};

export default React.memo(Dev_T_Colors);
