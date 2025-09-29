import React from 'react';
import { RuleCheckProps as Props } from './RuleCheck.types';

export const RuleCheck = ({ title, checked, error }: Props) => {
  return (
    <Stack row center spacing={2}>
      <Icon size={14} color={checked ? 'primary' : error ? 'error' : 'opacity50'}>
        check
      </Icon>
      <T size={14} color={checked ? 'primary' : error ? 'error' : 'opacity50'}>
        {title}
      </T>
    </Stack>
  );
};

export default RuleCheck;
