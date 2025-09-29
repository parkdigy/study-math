import React from 'react';
import { PanelProps as Props } from './Panel.types';
import './Panel.scss';

export const Panel = ({ className, ...props }: Props) => {
  return <Stack className={classnames(className, 'Panel')} {...props} />;
};

export default Panel;
