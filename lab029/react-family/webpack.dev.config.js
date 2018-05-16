const path = require('path');

module.exports = {
    //调试工具优化
    devtool: 'inline-source-map',

    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },

    //webpack-dev-server
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },

    resolve: {
        alias: {
            pages: path.join(__dirname, "src/pages"),
            component: path.join(__dirname, "src/component"),
            router: path.join(__dirname, "src/router"),
            actions: path.join(__dirname, "src/redux/actions"),
            reducers: path.join(__dirname, "src/redux/reducers"),
        }
    },
};

