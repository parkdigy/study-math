# react-template

## env
`APP_HOST` 와 `API_URL` 의 도메인이 다르면 쿠키가 적용되지 않음.

## 배포
- 최종 프로젝트의 `/server/.gitignore` `/client/.gitignore`
    ```
    # /dist <-- 이 부분 주석 처리
    ```

- Server
```
$ npm run install:prod
$ npm run pm2:start
```
