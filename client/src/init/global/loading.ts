let _showLoading: (() => void) | undefined;
let _hideLoading: (() => void) | undefined;

function $setLoading(showLoading: () => void, hideLoading: () => void) {
  _showLoading = showLoading;
  _hideLoading = hideLoading;
}

function $showLoading() {
  if (_showLoading) {
    _showLoading();
  }
}

function $hideLoading() {
  if (_hideLoading) {
    _hideLoading();
  }
}

/* eslint-disable no-var */
declare global {
  var __setLoading: typeof $setLoading;
  var showLoading: typeof $showLoading;
  var hideLoading: typeof $hideLoading;
}
/* eslint-enable no-var */

globalThis.__setLoading = $setLoading;
globalThis.showLoading = showLoading;
globalThis.hideLoading = hideLoading;

export {};
