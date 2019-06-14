const path = require('path');
const CleanWebpackPlugin = require("html-webpack-plugin");

const common = require('./webpack.common')
const merge = require('webpack-merge');
module.exports = merge(common, {
    mode: "production",
    entry:  "./src/index.js",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new CleanWebpackPlugin()]
})