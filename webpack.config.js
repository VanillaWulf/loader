const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryExport: 'default'
    },
 
    plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        path: path.resolve(__dirname, 'dist'),
        filename: './index.html',
        inject: 'body'
    })
    ]
}