import React from 'react';
import { IconProps as Props } from './Icon.types';
import { CustomComponent } from '../CustomComponent';
import { AllColors, AllSizes } from '@theme';
import util from '@util';
import './Icon.scss';

export const Icon = ({
  className,
  type: initType,
  size = 'md',
  color,
  children: initChildren,
  rotate,
  transform,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const children = util.text.camelToSnakeCase(initChildren);
  const type = MaterialIconTypes.includes(initType as any) ? initType : LiveMaterialIconTypes[0];
  const isNamedColor = contains(AllColors, color);
  const isNamedSize = contains(AllSizes, size);
  const iconClassName = `material-icons-${type}`.replace('-filled', '');
  const fontSize = isNamedSize ? theme.sizes[size].fontSize : size;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <CustomComponent
      component='i'
      className={classnames(className, 'Icon', iconClassName, isNamedColor && `color-${theme.css.names.colors[color]}`)}
      color={isNamedColor ? undefined : color}
      fontSize={fontSize}
      transform={ifUndefined(transform, rotate ? `rotate(${rotate}deg)` : undefined)}
      {...props}
    >
      {children}
    </CustomComponent>
  );
};

export default Icon;
