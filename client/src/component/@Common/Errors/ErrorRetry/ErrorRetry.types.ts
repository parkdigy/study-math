import { DefaultColors } from '@theme';

export interface ErrorRetryProps {
  className?: string;
  title?: string;
  message?: ReactNode;
  color?: DefaultColors;
  fullScreen?: boolean;
  fullSize?: boolean;
  retryLabel?: string;
  retryButtonProps?: Omit<ButtonProps, 'ref' | 'children' | 'onClick'>;
  onRetry?: () => void;
}
