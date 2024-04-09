export interface AppContextValue {
  showHtmlLoading(): void;
  hideHtmlLoading(): void;
  removeHtmlLoading(): void;
}

/* eslint-disable */
export const AppContextDefaultValue: AppContextValue = {
  showHtmlLoading() {},
  hideHtmlLoading() {},
  removeHtmlLoading() {},
};
/* eslint-enable */
