export interface LoadingContextValue {
  showLoading(): void;
  hideLoading(): void;
}

/* eslint-disable */
export const LoadingContextDefaultValue: LoadingContextValue = {
  showLoading() {},
  hideLoading() {},
};
/* eslint-enable */
