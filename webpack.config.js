var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client', 'react-hot-loader/patch', 'babel-polyfill', './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new NpmInstallPlugin()],
  module: {
    loaders: [ // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime']
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }, {
        test:   /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
