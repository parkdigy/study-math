import React from 'react';
import { Dev_FormControl_RulesProps as Props } from './Dev_FormControl_Rules.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Rules = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Rule' title='규칙 적용 (rules)' mt={-5}>
      <FormCheckbox type='switch' name='rules' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Rules);
