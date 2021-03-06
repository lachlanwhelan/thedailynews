//DEVELOPMENT CONFIG

const path = require ('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');//allows us to merge webpack configs together


module.exports = merge(common, {

    //webpack creates this output file when built/run
    output: {
        filename: 'main.js', //contentHash creates new filename every time code is changed
        path: path.resolve(__dirname, 'dist') // where webpack puts bundled code
    },

    //tell the dev server where to look for files:
    devServer: {
     contentBase: './dist',
    },

    //by default mode is set to production
    mode: 'development'
});