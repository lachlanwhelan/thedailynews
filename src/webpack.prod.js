//PRODUCTION CONFIG

const path = require ('path');
const common = require('./webpack.common');//common config
const merge = require('webpack-merge'); //allows us to merge webpack configs together

module.exports = merge(common, {
    //webpack creates this output file when built/run
    output: {
        filename: 'main.[contentHash].js', //contentHash creates new filename every time code is changed
        path: path.resolve(__dirname, 'dist') //where webpack puts bundled code
    },

    //by default mode is set to production
    mode: 'production'
});