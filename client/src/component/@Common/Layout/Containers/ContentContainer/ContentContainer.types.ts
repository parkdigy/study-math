export interface ContentContainerProps extends Omit<StackProps, 'width' | 'minWidth' | 'maxWidth'> {
  containerProps?: Omit<FlexProps, 'className' | 'children'>;
}
