import _classNames from 'classnames';

declare global {
  // eslint-disable-next-line no-var
  var classnames: typeof _classNames;
}

globalThis.classnames = _classNames;
