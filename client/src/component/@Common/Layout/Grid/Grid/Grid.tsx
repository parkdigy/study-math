import React from 'react';
import { GridProps as Props } from './Grid.types';
import './Grid.scss';
import { GridContextProvider, GridContextValue } from '../Context';
import { AllScreenAliases, GeneralScreens } from '@theme';
import { useScreenSize } from '@context';

export const Grid = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, cols = 12, spacing = 0, ...props }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const screen = useScreenSize();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const rowNumber = useRef(0);
    const rowNumberMap = useRef<Dict<number>>({});

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const finalCols = useMemo(() => {
      if (typeof cols === 'number') {
        return cols;
      } else {
        let currentCols = 1;
        let newFinalCols = currentCols;
        keys(AllScreenAliases).find((alias) => {
          if (cols[alias]) currentCols = cols[alias];
          if (!contains(GeneralScreens, alias) && screen.is[alias]) {
            newFinalCols = currentCols;
            return true;
          }
        });
        return newFinalCols;
      }
    }, [cols, screen.is]);

    /********************************************************************************************************************
     * Context Value
     * ******************************************************************************************************************/

    const contextValue = useMemo<GridContextValue>(
      () => ({
        cols: finalCols,
        getRowNumber(id: string) {
          if (rowNumberMap.current[id]) {
            return rowNumberMap.current[id];
          }
          rowNumber.current += 1;
          rowNumberMap.current[id] = rowNumber.current;
          return rowNumberMap.current[id];
        },
      }),
      [finalCols]
    );

    /********************************************************************************************************************
     * Style
     * ******************************************************************************************************************/

    const style = {
      '--grid-cols': `${finalCols}`,
      '--grid-spacing': typeof spacing === 'number' ? `${spacing}px` : spacing,
    };

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <GridContextProvider value={contextValue}>
        <Box ref={ref} className={classnames(className, 'Grid')} cssVars={style} {...props}>
          {children}
        </Box>
      </GridContextProvider>
    );
  }
);

export default Grid;
