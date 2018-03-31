const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: './client/imgs/luckysite.png',
  minify: {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: false
  },
  hash: true
})


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['./client/index.js', './client/scss/main.scss'],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: "/"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  },
  module:{
    rules:[
        {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader']
          })
        },
        {
          test:/\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: [
            {loader: 'file-loader', options:{name: '[path][name].[ext]', outputPath: 'imgs/'}},
          ]
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader'
      }
    ]
},

  devServer: {
    // host: '0.0.0.0',
    // disableHostCheck: true
},


  plugins: [HtmlWebpackPluginConfig,
     new ExtractTextPlugin({filename:'main.css', disable: false, allChunks: true}),
     new CompressionPlugin({
      // asset: "[path].gz[query]",
      // algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
      // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
  ]
}
