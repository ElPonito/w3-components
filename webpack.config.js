const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'demo/index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 8181,
        open: true,
        openPage: ''
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // JS ou JSX
                loaders: ['babel-loader'],
                include: [path.join(__dirname, 'demo'), path.join(__dirname, 'lib')]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.png/,
                loader: 'file-loader?name=[name].[ext]'
            },
        ]
    },
    plugins: [

        // Plugin to generate index.html from index.tpl.html
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'demo/index.tpl.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),

        // Load and declare React as global variable (= window.react)
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ]
}