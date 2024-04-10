// eslint-disable-next-line @typescript-eslint/no-var-requires
const compose = require('next-compose');

module.exports = compose([
  {
    webpack(config) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
        },
      });
      return config;
    },
  },
  {
    reactStrictMode: true,
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    }
  }
]);