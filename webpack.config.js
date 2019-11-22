const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluging = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
    entry: path.join(__dirname,'./src/App.js'),
    output:{
        filename: "bundle.[name].js",
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:['babel-loader','css-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }), 
        new MiniCssExtractPluging()
    ]
}