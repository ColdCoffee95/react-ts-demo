const path = require('path');
const X_ENV = process.env.X_ENV;
const X_VERSION = process.env.X_VERSION;
console.log('X_ENV', X_ENV);
console.log('X_VERSION', X_VERSION);
module.exports = {
  common: {
    entry: {
      app: path.resolve(__dirname, 'src', 'index.tsx')
    },

    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        assets: path.resolve(__dirname, 'src/assets/'),
        public: path.resolve(__dirname, 'public'),
        configs: path.resolve(__dirname, 'src/configs'),
        utils: path.resolve(__dirname, 'src/utils'),
        common: path.resolve(__dirname, 'src/common'),
        services: path.resolve(__dirname, 'src/services'),
      },
    },
  },
  dev: {
    devServer: {
      host: "0.0.0.0",
      port: 8081,
      historyApiFallback: true,
      publicPath: '/'
    },
    output: {
      publicPath: '/'
    }
  },
  prod: {
    output: {
      publicPath: `/`,
    },
    devtool: 'eval-cheap-source-map'

  }
};