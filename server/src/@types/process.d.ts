type EnvBoolean = 'true' | 'false' | '';

declare namespace NodeJS {
  interface ProcessEnv {
    // 프로젝트명 (영문자/하이픈/언더바 만 사용, 기타 특수문자 및 공백 사용 불가)
    PROJECT_NAME: string;
    // 앱명
    APP_NAME: string;
    // 환경 (local, development, staging, production)
    APP_ENV: 'local' | 'development' | 'staging' | 'production';
    // 암호화 키
    APP_KEY: string;
    // 실행 호스트
    APP_HOST: string;
    // 실행 포트
    APP_PORT: string;

    // API URL
    API_URL: string;
    // API 연결 유지 여부 (true, false)
    API_KEEP_ALIVE: string;
    // API 연결 유지 시간 (초)
    API_KEEP_ALIVE_TIMEOUT_SECONDS: string;

    // 클라이언트와 연결 유지 여부
    APP_KEEP_ALIVE: EnvBoolean;
    // 클라이언트와 연결 유지 시간 (초)
    APP_KEEP_ALIVE_TIMEOUT_SECONDS: string;

    // HTTPS 사용 여부
    APP_SECURE: EnvBoolean;
    // HTTPS 포트
    APP_SECURE_PORT: string;
    // HTTPS 인증서 key.pem 파일 경로
    APP_SECURE_KEY_PATH: string;
    // HTTPS 인증서 cert.pem 파일 경로
    APP_SECURE_CERT_PATH: string;
    // HTTPS 인증서 ca.pem 파일 경로
    APP_SECURE_CA_PATH: string;

    // 세션 드라이버 (file, database, redis, ...)
    SESSION_DRIVER: string;
    // 세션 만료 시간 (초)
    SESSION_EXPIRES_IN_SEC: string;

    // 세션 Redis 호스트 (세션 드라이버가 redis 인 경우)
    SESSION_REDIS_HOST: string;
    // 세션 Redis 포트 (세션 드라이버가 redis 인 경우)
    SESSION_REDIS_PORT: string;
    // 세션 Redis 암호 (세션 드라이버가 redis 인 경우)
    SESSION_REDIS_PASSWORD: string;

    // 슬랙 웹훅 URL (서버 시작 시 알림)
    SLACK_WEB_HOOK_URL: string;

    // GitHub Actions 배포 암호
    DEPLOY_GITHUB_SECRET: string;
    // GitHub Actions 배포 브랜치
    DEPLOY_GITHUB_REF: string;
  }
}
