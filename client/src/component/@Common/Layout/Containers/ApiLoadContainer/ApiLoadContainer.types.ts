export interface ApiLoadContainerCommands {
  load: () => void;
}

export interface ApiLoadContainerProps<T, TApiData> extends Omit<BoxProps, 'ref' | 'children' | 'onLoad'> {
  children?: ReactNode | ((apiData: TApiData) => ReactNode);
  load?: boolean;
  data?: T;
  retryDelay?: number;
  onLoad: (() => Promise<TApiData>) | ((data: T) => Promise<TApiData>);
}
