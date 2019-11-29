const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluging = require('mini-css-extract-plugin');
const webpackMerge = require('webpack-merge');
const path = require('path');
const ExtractCSSChunksPlugin = require('extract-css-chunks-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const combineoaders = require('webpack-combine-loaders');

const modeConfig = env => require(`./build-utils/webpack.${env}.js`)(env);

module.exports = ({ mode, presents } = { mode: 'production', presents: [] }) =>
    webpackMerge(
        {
            mode,
            entry: path.join(__dirname, './src/App/clientApp/index.js'),

            output: {
                filename: '[chunk].bundle.js',
                path: path.join(__dirname, 'dist'),
            },
            plugins: [
                new HtmlWebpackPlugin({
                    hash: true,
                    template: path.join(__dirname, './src/App/clientApp/index.html'),
                    filename: 'index.html',
                }),
                new Webpack.ProgressPlugin(),
                new MiniCssExtractPluging({
                    filename: '[name].css'
                })
            ],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                    },
                    {
                        test: /\.html$/,
                        exclude: /node_modules/,
                        loader: ['babel-loader', 'html-loader'],
                    },
                    {
                        test: /\.(sa|c)ss$/i,
                        use: ['style-loader', MiniCssExtractPluging.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                        
                        ]
                    },
                    {
                        test: /\.(jpe?g|png|gif|svg)$/i,
                        use: [
                            'url-loader?limit=10000',
                            'img-loader'
                        ]
                    }
                ],

            },

        },
        modeConfig(mode)
    );
