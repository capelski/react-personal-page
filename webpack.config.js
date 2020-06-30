const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
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
    },
    // TODO To be applied only on development mode
    devServer: {
        historyApiFallback: true
    }
};
