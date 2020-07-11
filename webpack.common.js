const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {

    //entry point for webpack
    //what webpack looks for first
    entry: './src/index.js',


    //loaders
    module:{
        rules: [
            {
              test: /\.m?js$/, //regex check for js file
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader', // use babel loader
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
              test: /\.html$/,
              use: ["html-loader"]
            },
            {
              test: /\.scss$/,
              use: [
                //Creates 'style' nodes from js strings
                "style-loader",
                //Translates CSS into CommonJS
                "css-loader",
                //A webpack loader that rewrites relative paths in url() statements based on the original source file.
                "resolve-url-loader",
                //Compiles Sass to CSS
                 "sass-loader"
              ]
            },
            {
              test: /\.(jpg|png|)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: "[name].[ext]"
                  }
                }
              ]
            }
          ]
    },

    //plugins
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })]
}