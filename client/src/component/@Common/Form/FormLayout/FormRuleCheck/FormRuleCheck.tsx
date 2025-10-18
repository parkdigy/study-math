import React from 'react';
import { FormRuleCheckProps as Props } from './FormRuleCheck.types';
import { ReactComponent as IconCheck } from './icon_check.svg';

export const FormRuleCheck = ({ title, checked, error }: Props) => {
  return (
    <Stack row center spacing={4}>
      <IconCheck
        fill={checked ? 'var(--color-form-primary)' : error ? 'var(--color-form-error)' : 'var(--color-opacity-40)'}
      />
      <T size='caption' color={checked ? 'formPrimary' : error ? 'formError' : 'textLighten'}>
        {title}
      </T>
    </Stack>
  );
};

export default FormRuleCheck;
