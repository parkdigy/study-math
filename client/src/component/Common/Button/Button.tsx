/********************************************************************************************************************
 * Box 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { ButtonProps as Props } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ color, fullWidth, className: initClassName, size, ...props }, ref) => {
    const className = useMemo(
      () =>
        classnames(
          initClassName,
          `Button_color_${color || 'primary'}`,
          `Button_size_${size}`,
          !!fullWidth && 'Button_full_width'
        ),
      [color, fullWidth, initClassName, size]
    );

    return <StyledButton ref={ref} className={className} {...props} />;
  }
);

export default Button;

const StyledButton = styled('button')`
  border: 0;
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  white-space: nowrap;

  &.Button_full_width {
    width: 100%;
  }

  &.Button_size_small {
    padding: 6px 10px 5px;
    font-size: 12px;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.4;
  }

  &.Button_color_primary {
    background-color: ${color.primary};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${color.primaryDark};
    }
    &:focus:not([disabled]) {
      background-color: ${color.primaryDark};
    }
    &:active:not([disabled]) {
      background-color: ${color.primaryLight};
    }
  }

  &.Button_color_secondary {
    background-color: ${color.secondary};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${color.secondaryDark};
    }
    &:focus:not([disabled]) {
      background-color: ${color.secondaryDark};
    }
    &:active:not([disabled]) {
      background-color: ${color.secondaryLight};
    }
  }

  &.Button_color_error {
    background-color: ${color.error};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${color.errorDark};
    }
    &:focus:not([disabled]) {
      background-color: ${color.errorDark};
    }
    &:active:not([disabled]) {
      background-color: ${color.errorLight};
    }
  }

  &.Button_color_success {
    background-color: ${color.success};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${color.successDark};
    }
    &:focus:not([disabled]) {
      background-color: ${color.successDark};
    }
    &:active:not([disabled]) {
      background-color: ${color.successLight};
    }
  }

  &.Button_color_warning {
    background-color: ${color.warning};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${color.warningDark};
    }
    &:focus:not([disabled]) {
      background-color: ${color.warningDark};
    }
    &:active:not([disabled]) {
      background-color: ${color.warningLight};
    }
  }

  &.Button_color_info {
    background-color: ${color.info};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${color.info};
    }
    &:focus:not([disabled]) {
      background-color: ${color.infoDark};
    }
    &:active:not([disabled]) {
      background-color: ${color.infoLight};
    }
  }

  &.Button_color_gray {
    background-color: ${color.gray};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${color.gray};
    }
    &:focus:not([disabled]) {
      background-color: ${color.gray600};
    }
    &:active:not([disabled]) {
      background-color: ${color.gray600};
    }
  }

  &.Button_color_light {
    background-color: ${color.gray300};
    color: #333;
    &:hover:not([disabled]) {
      background-color: ${color.gray300};
    }
    &:focus:not([disabled]) {
      background-color: ${color.gray400};
    }
    &:active:not([disabled]) {
      background-color: ${color.gray400};
    }
  }
`;
