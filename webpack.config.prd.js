var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: "./index.js"
    },
    output: {
        publicPath: "/assets/",
        path: path.resolve(__dirname, 'dist/assets'),
        filename: "index.[chunkhash].js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'autoprefixer-loader', 'sass-loader'],
                fallback: 'style-loader',
            })
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
            },
            exclude: /node_modules/,
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'template/template.html'
        })
    ]
}
