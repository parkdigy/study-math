export interface ColProps extends Omit<FlexProps, 'width' | 'minWidth' | 'maxWidth'> {
  children?: ReactNode;
  className?: string;
  cols?: number;
}
