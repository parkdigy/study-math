import { ScreenAlias } from '@theme';
import { GridCols } from '@ccomp';

export interface Dev_FormControl_ColsProps {
  disabled?: boolean;
  useResponsive: boolean;
  cols: GridCols | undefined;
  responsiveCols: Partial<Record<ScreenAlias, GridCols | undefined>>;
  onChangeUseResponsive: (useResponsive: boolean) => void;
  onChangeCols: (cols: GridCols | undefined) => void;
  onChangeResponsiveCols: (responsiveCols: Partial<Record<ScreenAlias, GridCols | undefined>>) => void;
}
