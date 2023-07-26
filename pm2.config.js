module.exports = {
  apps: [
    {
      name: 'production',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'production',
        APP_PORT: 4000,
        GITHUB_API_BASE_URL: 'https://api.github.com',
        GITHUB_API_ACCESS_TOKEN: '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',
        GITHUB_REPO_OWNER: 'shoshincl',
        GITHUB_REPO_NAME: 'fulltimeforce_backend_nest',
      },
    },
  ],
};
