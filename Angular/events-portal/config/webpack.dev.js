//Dev env settings
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

const path = require('path');
const rootDir = path.resolve(__dirname);

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    mode:'development',
    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
