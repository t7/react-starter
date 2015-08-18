var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    }, { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
    { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=[name]_[sha512:hash:base64:7].[ext]'}

  ]},

  postcss: [
    require('autoprefixer-core')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.NoErrorsPlugin()
  ]
}

