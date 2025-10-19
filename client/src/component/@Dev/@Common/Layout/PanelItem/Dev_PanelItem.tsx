import React from 'react';
import { Dev_PanelItemProps as Props } from './Dev_PanelItem.types';

export const Dev_PanelItem = ({ title, icon, iconProps, ...props }: Props) => {
  return (
    <Flex gap={10}>
      <TBodySmall500 color='success' icon={icon} iconProps={iconProps} ellipsis>
        {title}
      </TBodySmall500>
      <Flex {...props} />
    </Flex>
  );
};

export default Dev_PanelItem;
