import React from 'react';
import { Dev_FormControl_SearchableProps as Props } from './Dev_FormControl_Searchable.types';
import { FormCheckbox } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Searchable = ({ value, ...props }: Props) => {
  return (
    <Dev_PanelItem icon='Search' title='검색 가능 (searchable)' mt={-5}>
      <FormCheckbox type='switch' name='searchable' checked={value} {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Searchable);
