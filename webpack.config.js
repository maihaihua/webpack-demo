var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = function (env) {
    return {
        entry: {
            bundle: "./src/app.js"
        },
        output: {
            filename: "[name].[chunkhash].js",
            path: path.resolve(__dirname, "./dist/js")
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    // this assumes your vendor imports exist in the node_modules directory
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "manifest"
            }),
            new HtmlWebpackPlugin({
                title:"Webpack",
                filename: "../index.html",
                template: "./src/template/index.template.html",
                inject: "body"
            })
        ]
    }
}