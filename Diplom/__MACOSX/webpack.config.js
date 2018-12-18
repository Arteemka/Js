'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/script.js',
    output: {
        filename: 'script.js',
        path: __dirname + '/dist/js'
    },
    watch: false,
    devtool: "sourse-map",
    mode: 'development',

   
    // plugins: [
    //     new UglifyJsPlugin()
    // ]
};