var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require("path");

module.exports = function (env) {
    return {
        entry: {
            bundle: "./src/app.js"
        },
        output: {
            filename: "[name].[chunkhash].js",
            chunkFilename:"[name].js",
            path: path.resolve(__dirname, "./dist/js"),
            publicPath:"./js/"
        },
        module:{
            rules:[{
                test:/\.css/,
                use: ExtractTextPlugin.extract({
                    use:"css-loader",
                    publicPath:"./css"
                })
            }]
        },
        plugins: [
            // new webpack.DllReferencePlugin({       // 敲黑板，这里是重点
            //     context: path.resolve(__dirname,"dist"),                  // 同那个dll配置的路径保持一致
            //     manifest: require('./dist/dll/manifest.json') // manifest的缓存信息
            // }),
            // new ExtractTextPlugin("[name]-[contenthash].css"),
            new HtmlWebpackPlugin({
                title: "Webpack",
                filename: path.resolve(__dirname,"dist","index.html"),
                template: "./src/template/index.html",
                inject: "body"
            })
        ]
    }
}