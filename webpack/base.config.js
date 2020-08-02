const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src-client/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                query: {
                    configFileName: './tsconfig-client.json'
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'client-bundle.js?$modena=react-personal-page',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PRODUCTION_URL_BASE': JSON.stringify(
                'https://carlescapellas.xyz/react-personal-page'
            )
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css?$modena=react-personal-page'
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'assets'
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss']
    }
};
