export const AlertType = ['info', 'success', 'warning', 'error'] as const;
export type AlertType = (typeof AlertType)[number];

export interface AlertProps extends Omit<BoxProps, 'type' | 'title' | 'children'> {
  type?: AlertType;
  title?: string;
  message?: string;
  showIcon?: boolean;
}
