import { DefaultColors } from '@theme';

export interface ErrorRetryProps {
  className?: string;
  title?: string;
  message?: ReactNode;
  color?: DefaultColors;
  fullScreen?: boolean;
  fullSize?: boolean;
  retryLabel?: string;
  retryButtonProps?: Omit<ButtonProps, 'ref' | 'children' | 'className' | 'onClick'>;
  onRetry?: () => void;
}
