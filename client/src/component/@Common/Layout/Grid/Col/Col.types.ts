export interface ColProps extends Omit<BoxProps, 'width' | 'minWidth' | 'maxWidth'> {
  children?: ReactNode;
  className?: string;
  cols?: number;
}
