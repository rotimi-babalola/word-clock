const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env) => {
  /* eslint global-require: 0 */
  /* eslint import/no-dynamic-require: 0 */

  const envConfig = require(`./build-utils/webpack.${env.mode}`);
  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
