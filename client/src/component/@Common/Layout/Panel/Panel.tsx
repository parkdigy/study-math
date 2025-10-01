import React from 'react';
import { PanelProps as Props } from './Panel.types';
import './Panel.scss';

export const Panel = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  return <Stack ref={ref} className={classnames(className, 'Panel')} {...props} />;
});

export default Panel;
