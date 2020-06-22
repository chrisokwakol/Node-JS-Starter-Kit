import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'public/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false
        })
    ],
    mode: "development",
    module: {
        rules: [{
            test: /\.js$/,
            enforce: "pre",
            exclude: /node_modules/,
            loaders: ['babel-loader']
        },
        {
            //It's not longer allowed to omit the -loader suffix when using loaders.
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }]
    }
}