import { CSSProperties } from 'react';

export interface DividerProps {
  className?: string;
  vertical?: boolean;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}
