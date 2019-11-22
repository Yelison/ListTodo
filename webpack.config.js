const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluging = require('mini-css-extract-plugin')
const webpackMerge = require('webpack-merge');
const path = require('path');

const modeConfig = env => require(`./build-utils/webpack.${env}.js`)(env)

module.exports = ({ mode, presents } = { mode: "production", presents: [] }) => webpackMerge({
    mode,
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'html-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPluging(),
        new Webpack.ProgressPlugin()
    ]
},
    modeConfig(mode)
);
