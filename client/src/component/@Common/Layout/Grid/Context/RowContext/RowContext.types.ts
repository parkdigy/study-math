export interface RowContextValue {
  getColNumber: (id: string, cols: number | undefined, callback: (cols: number) => void) => number;
}
