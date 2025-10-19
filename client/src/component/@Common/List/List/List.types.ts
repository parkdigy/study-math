export type ListType = 'info';

export type ListVariant = 'default' | 'bordered';

export interface ListProps extends Omit<BoxProps, 'type' | 'title' | 'children'> {
  type?: ListType;
  variant?: ListVariant;
  items: ReactNode[];
  title?: string;
  gap?: number;
}
