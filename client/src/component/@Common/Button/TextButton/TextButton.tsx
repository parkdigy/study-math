import React from 'react';
import { TextButtonProps as Props } from './TextButton.types';
import './TextButton.scss';

export const TextButton = ({ className, color = 'text', size = 'body', cssVars, ...props }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Button
      className={classnames(className, 'TextButton')}
      variant='text'
      color={color}
      cssVars={{
        ...cssVars,
        '--font-size': theme.css.vars.sizes[size].fontSize,
        '--line-height': theme.css.vars.sizes[size].lineHeight,
      }}
      {...props}
    />
  );
};

export default TextButton;
