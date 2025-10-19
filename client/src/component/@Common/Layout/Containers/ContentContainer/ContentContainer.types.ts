export interface ContentContainerProps extends Omit<FlexProps, 'width' | 'minWidth' | 'maxWidth'> {
  containerProps?: Omit<FlexProps, 'className' | 'children'>;
}
