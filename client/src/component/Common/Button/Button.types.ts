import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info' | 'light' | 'gray';
  fullWidth?: boolean;
  size?: 'small' | 'medium';
}
