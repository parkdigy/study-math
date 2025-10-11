import React from 'react';
import { IconHtmlProps, IconProps as Props } from './Icon.types';
import { CustomComponent } from '../CustomComponent';
import { AllColors, AllSizes } from '@theme';
import util from '@util';
import './Icon.scss';

export const Icon = React.forwardRef<HTMLElement, Props>(
  (
    {
      className,
      type: initType,
      s: initS,
      size: initSize,
      c: initC,
      color: initColor,
      children: initChildren,
      rotate,
      transform,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const size = ifUndefined(ifUndefined(initSize, initS), 'md');
    const color = ifUndefined(initColor, initC);

    const children = util.text.camelToSnakeCase(initChildren);
    const type = MaterialIconTypes.includes(initType as any) ? initType : LiveMaterialIconTypes[0];
    const isNamedColor = color !== undefined && contains(AllColors, color);
    const isNamedSize = contains(AllSizes, size);
    const iconClassName = `material-icons-${type}`.replace('-filled', '');
    const fontSize = isNamedSize ? theme.sizes[size].fontSize : size;

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <CustomComponent<IconHtmlProps>
        ref={ref}
        component='i'
        className={classnames(
          className,
          'Icon',
          iconClassName,
          isNamedColor && `color-${theme.css.names.colors[color]}`
        )}
        color={isNamedColor ? undefined : color}
        cssVars={{ '--font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize }}
        transform={ifUndefined(transform, rotate ? `rotate(${rotate}deg)` : undefined)}
        {...props}
      >
        {children}
      </CustomComponent>
    );
  }
);

export default Icon;
