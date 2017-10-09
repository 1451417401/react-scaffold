var path = require('path');
var webpack=require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './index.js',
        vender: ['react','react-dom']
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist/assets'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            //use: ['style-loader', 'css-loader', 'sass-loader'],
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template/template.html',
            chunks:['vender','index']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
}
