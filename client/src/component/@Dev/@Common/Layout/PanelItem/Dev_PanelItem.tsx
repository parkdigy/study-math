import React from 'react';
import { Dev_PanelItemProps as Props } from './Dev_PanelItem.types';

export const Dev_PanelItem = ({ title, icon, iconProps, ...props }: Props) => {
  return (
    <Stack spacing={10}>
      <TBodySmall500 color='success' icon={icon} iconProps={iconProps} ellipsis>
        {title}
      </TBodySmall500>
      <Stack {...props} />
    </Stack>
  );
};

export default Dev_PanelItem;
