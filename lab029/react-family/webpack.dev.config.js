const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config');

const devConfig = {
    devtool: "inline-source-map",
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, "src/index.js")
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: {
            "/api/*": "http://localhost:8090/$1"
        }
    },
};

//合并config
module.exports = merge({
    customizeArray(a, b, key) {
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);