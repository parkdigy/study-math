import React from 'react';
import { RuleCheckProps as Props } from './RuleCheck.types';
import { IconCheck } from './icons';

export const RuleCheck = ({ title, checked, error }: Props) => {
  return (
    <Stack row center spacing={4}>
      <IconCheck fill={checked ? 'var(--color-primary)' : error ? 'var(--color-error)' : 'var(--color-opacity-40)'} />
      <T size='caption' color={checked ? 'primary' : error ? 'error' : 'textLighten'}>
        {title}
      </T>
    </Stack>
  );
};

export default RuleCheck;
