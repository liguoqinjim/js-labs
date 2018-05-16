const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: "cheap-module-source-map",
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", 'postcss-loader']
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),//这里只删除dist文件夹里面的文件，不会去删除api文件夹了
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
}

module.exports = merge(commonConfig, publicConfig);