const path = require('path');

const enableSourceMap = process.env.ENABLE_SOURCEMAP === 'true';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  devtool: enableSourceMap && 'source-map',
  module: {
    rules: [
      enableSourceMap && {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ].filter(Boolean),
  },
  mode: 'production',
};
