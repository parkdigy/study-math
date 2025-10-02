import React from 'react';
import { Dev_PanelProps as Props } from './Dev_Panel.types';
import './Dev_Panel.scss';

export const Dev_Panel = ({ className, ...props }: Props) => {
  return <Panel className={classnames(className, 'Dev_Panel')} {...props} />;
};

export default Dev_Panel;
