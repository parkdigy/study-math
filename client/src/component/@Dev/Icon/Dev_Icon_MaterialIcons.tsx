import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';

const Dev_Icon_MaterialIcons = () => {
  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_PanelItem title='아이콘 세트' gap={15}>
          <Divider />

          <Alert type='info' message='/src/init/material-icons.ts 에서 사용할 아이콘 지정' showIcon mt={5} />

          {['filled', 'outlined', 'round', 'sharp'].map((type, idx) => (
            <Flex key={idx} row center wrap gap={10}>
              <T width={80}>{type}</T>
              {!contains(LiveMaterialIconTypes, type) ? (
                <TError width={140}>라이브에서 사용 불가</TError>
              ) : (
                <TPrimary width={140}>라이브에서 사용 가능</TPrimary>
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
                <TOpacity50>사용 안함 (src/init/material-icons.ts 선택 가능)</TOpacity50>
              )}
            </Flex>
          ))}
        </Dev_PanelItem>
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_Icon_MaterialIcons);
