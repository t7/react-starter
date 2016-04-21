var autoprefixer = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// ======================
// Returns *.scss loader.
// ======================

function getStyleLoader () {
  var x = 'style!css?-url!postcss!sass'

  if (process.env.BABEL_ENV === 'production') {
    x = ExtractTextPlugin.extract('style', 'css?-url&minimize!postcss!sass')
  }

  return x
}

// ========
// Plugins.
// ========

var plugins = [
  // Generate "index.html" file.
  new HtmlWebpackPlugin({
    template: './source/index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeCDATASectionsFromCDATA: true,
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }
  }),

  /*
    This adds the `window.fetch` Ajax helper.

    Documentation here:

    https://github.com/github/fetch
  */
  new webpack.ProvidePlugin({
    'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
    'window.Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    'window.fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }),

  // Bundle ".scss" in one ".css" file.
  new ExtractTextPlugin('bundle.css', {
    allChunks: true
  })
]

// For production build.
if (process.env.BABEL_ENV === 'production') {
  // Set NODE_ENV.
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  )

  // Minify JS.
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  )

  // Copy over "static" folder.
  plugins.push(
    new CopyWebpackPlugin([
      {
        // Input: "./source/static".
        from: './source/static',

        // Output: "/build/static".
        to: './static'
      }
    ])
  )
}

// ========================
// Export Webpack settings.
// ========================

module.exports = {
  entry: [
    './source'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      // JSON.
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      // JavaScript.
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      // CSS.
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        )
      },
      // Sass.
      {
        test: /\.scss$/,
        loader: getStyleLoader()
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer
    ]
  }
}
