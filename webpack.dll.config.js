const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: {
    common: ['vue', 'moment']
  },
  output: {
    publicPath:"./dll",
    path: path.resolve(__dirname,"dist/dll"),
    filename: '[name]-[chunkhash].js',
    library: '[name]'               // 必填项，将此dll包暴露到window上，给app.js调用
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.resolve(__dirname,"dist"),                // 必填项，用来标志manifest中的路径
      path: './dist/dll/manifest.json',    // 必填项，存放manifest的路径
      name: '[name]'                     // 必填项，manifest的name
    }),
    new HtmlWebpackPlugin({              // 利用该插件实现vendor被插入到html中
      filename: path.resolve(__dirname,"src/template","index.html"),
      template: './src/template/index.template.html',
      inject: 'body'
    })
  ]
};