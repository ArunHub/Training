const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const rootDir = path.resolve(__dirname);

module.exports = {
    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app': './src/app/main.ts',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: './tsconfig.json' }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'angular-router-loader',
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name]_[hash:7].[ext]'
                        }
                    },
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core/,
            path.resolve(__dirname)
        ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            'Popper': 'popper.js'
        }),
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            {
                from: 'src/images/*.png',
                to: './images',
                flatten: true
            }
        ], {})
    ],
    optimization: {
        namedModules: true, // NamedModulesPlugin()
        splitChunks: { // CommonsChunkPlugin()
            name: 'vendor',
            minChunks: 2
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin,
    }
};
