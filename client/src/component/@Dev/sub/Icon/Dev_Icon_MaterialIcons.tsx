import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';

const Dev_Icon_MaterialIcons = () => {
  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_PanelItem title='아이콘 세트' spacing={15}>
          <Divider />

          <Alert type='info' message='/src/init/material-icons.ts 에서 사용할 아이콘 지정' showIcon mt={5} />

          {['filled', 'outlined', 'round', 'sharp'].map((type, idx) => (
            <Stack key={idx} row center wrap spacing={10}>
              <T width={80}>{type}</T>
              {!contains(LiveMaterialIconTypes, type) ? (
                <T color='error' width={140}>
                  라이브에서 사용 불가
                </T>
              ) : (
                <T color='primary' width={140}>
                  라이브에서 사용 가능
                </T>
              )}
              {contains(MaterialIconTypes, type) ? (
                <>
                  {[
                    'Home',
                    'AccountCircle',
                    'Check',
                    'Search',
                    'Close',
                    'Description',
                    'ThumbUp',
                    'Dangerous',
                    'Rocket',
                    'Rocket',
                    'StarRate',
                    'FilterAlt',
                    'Verified',
                    'Settings',
                    'AccountBalance',
                    'ChevronLeft',
                    'ChevronRight',
                    'KeyboardArrowDown',
                    'KeyboardArrowUp',
                  ].map((icon, idx) => (
                    <Icon key={idx} type={type} size={40}>
                      {icon}
                    </Icon>
                  ))}
                </>
              ) : (
                <T color='opacity50'>사용 안함 (src/init/material-icons.ts 선택 가능)</T>
              )}
            </Stack>
          ))}
        </Dev_PanelItem>
      </Dev_Panel>
    </Stack>
  );
};

export default React.memo(Dev_Icon_MaterialIcons);
