declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      TIFA_CONTRIBUTION_GRAPH_URI: string;
      STATSD_BUCKET: string;
      STATSD_HOST: string;
    }
  }
}

export {}
