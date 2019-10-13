var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
//路径是相对于package.json所在路径
var entry_map = {
    'index': './public/javascripts/index.js',
}
var config = {
    entry: entry_map,
    output: {
        path: path.resolve(process.cwd(), 'dist/'),
        //[name]-[hash].js可以指定hash值。
        filename: '[name].[hash:8].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash:8].css"
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, './lib'),
            to: path.resolve(__dirname, 'dist/lib')
        }]),
        new htmlWebpackPlugin({
            template: "./views/index.html",
            filename: "views/index.ejs",
            inject: true,
        }),
        new htmlWebpackPlugin({
            template: "./views/error.html",
            filename: "views/error.ejs",
            inject: true,
        }),
    ],
    externals: {
        "jquery": "window.jQuery"
    },

    module: {
        rules: [{
                test: /\.js[x]?$/,
                exclude: /(node_modules)|(global\/lib\/)/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        interpolate: true,
                        minimize: false
                    }
                }]
            },
            {
                test: /\.ejs/,
                use: ['ejs-loader'],
            }
        ]
    }
}
if (process.env.NODE_ENV == 'dev') {
    config.devtool = "source-map",
        config.mode = "development"
} else {
    config.mode = "production"
}
module.exports = config