// import helmet from 'helmet';

import { NextFunction, Request, Response } from 'express';

export default function (req: Request, res: Response, next: NextFunction) {
  next();
}

// export default helmet.contentSecurityPolicy({
//   directives: {
//     // defaultSrc: ["'self'"], // 지정하지 않은 채로 두는 대부분의 지시문에 대한 기본값을 정의합니다. 일반적으로 -src로 끝나는 모든 지시문에 이 사항이 적용됩니다
//     // childSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/child-src
//     // connectSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src
//     // fontSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/font-src
//     // frameSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src
//     // imgSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/img-src
//     // manifestSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src
//     // mediaSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/media-src
//     // objectSrc: ["'none'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/object-src
//     // prefetchSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/prefetch-src
//     // scriptSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
//     // scriptSrcElem: ["'none'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem
//     // scriptSrcAttr: ["'none'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr
//     // styleSrc: ["'self'", "'unsafe-inline'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
//     // styleSrcElem: ["'none'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem
//     // styleSrcAttr: ["'none'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr
//     // workerSrc: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src
//     // baseUri: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri
//     // pluginTypes: ["'none'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/plugin-types
//     // sandbox: [''], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox
//     // formAction: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/form-action
//     // frameAncestors: ["'self'"], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
//     // navigateTo: ['self'], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/nativate-to
//     // blockAllMixedContent: [''], // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
//     // upgradeInsecureRequests: [''] // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
//   }
// })
