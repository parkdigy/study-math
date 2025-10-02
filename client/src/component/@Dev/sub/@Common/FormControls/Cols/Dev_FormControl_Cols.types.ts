import { AllScreenAliases } from '@theme';
import { GridCols } from '@ccomp';

export interface Dev_FormControl_ColsProps {
  disabled?: boolean;
  useResponsive: boolean;
  cols: GridCols | undefined;
  responsiveCols: Partial<Record<AllScreenAliases, GridCols | undefined>>;
  onChangeUseResponsive: (useResponsive: boolean) => void;
  onChangeCols: (cols: GridCols | undefined) => void;
  onChangeResponsiveCols: (responsiveCols: Partial<Record<AllScreenAliases, GridCols | undefined>>) => void;
}
