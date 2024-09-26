const config = {
  version: (window as any).$$MyAppConfig?.version,
  env: (window as any).$$MyAppConfig?.env,
};

export default config;
