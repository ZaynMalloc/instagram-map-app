var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebPackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

var isProd = process.env.NODE_ENV === 'production' // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  loader: ['css-loader', 'sass-loader'],
  publicPath: '/dist'
})
var cssConfig = isProd ? cssProd : cssDev

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ]
}
/* eslint-disable eol-last */