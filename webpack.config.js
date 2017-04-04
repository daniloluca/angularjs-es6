var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ["./app/module.js"]
    },
    output: {
            path: path.resolve(__dirname, "dist"),
            filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                        presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
