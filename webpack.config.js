var webpack = require('webpack')
module.exports = {
  devServer: {
    contentBase: './build',
    hot: true
  },
  entry: [
    'webpack/hot/only-dev-server',
    './source/main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
