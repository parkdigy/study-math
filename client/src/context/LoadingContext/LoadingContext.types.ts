export interface LoadingContextValue {
  showLoading(): void;
  hideLoading(): void;
}

export const LoadingContextDefaultValue: LoadingContextValue = {
  showLoading() {},
  hideLoading() {},
};
