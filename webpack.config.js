// Dependencies.
var autoprefixer = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// ================ //
// ================ //
// Default plugins. //
// ================ //
// ================ //

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

// ============================= //
// ============================= //
// Plugins for production build. //
// ============================= //
// ============================= //

if (process.env.BABEL_ENV === 'production') {
  /*
    Set NODE_ENV, because some modules like
    React/Redux look for this in their code.

    Without adding this, the build process
    will just minify their "dev" versions.
  */
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
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
        // Input: "/source/static".
        from: './source/static',

        // Output: "/build/static".
        to: './static'
      }
    ])
  )
}

// =============================== //
// =============================== //
// Loaders for various file types. //
// =============================== //
// =============================== //

// Determine *.scss loader.
function sassLoader () {
  var x = 'style!css?-url!postcss!sass'

  if (process.env.BABEL_ENV === 'production') {
    x = ExtractTextPlugin.extract('style', 'css?-url&minimize!postcss!sass')
  }

  return x
}

var loaders = [
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
      'css-loader?minimize',
      'postcss-loader'
    )
  },
  // Sass.
  {
    test: /\.scss$/,
    loader: sassLoader()
  }
]

// ======================== //
// ======================== //
// Export Webpack settings. //
// ======================== //
// ======================== //

module.exports = {
  // Development code.
  entry: [
    './source'
  ],
  // Production build.
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
  plugins: plugins,
  postcss: [
    autoprefixer
  ]
}
