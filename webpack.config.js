const path = require('path')

// Placeholders in webpack
/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    // this is actually the configuration webpack uses
    
    // This results a nice, verbose output in main.js 
    mode: 'development',
    // This results a compressed, performance oriented main.js
    // mode: 'production'

    // This is the default path for the entry point
    // entry: './src/index.js'
    // entry: './src/engine.js',
    // Note: you can also specify multiple entry points like an object (or key-value pair)
    entry: {
        myfile: './src/engine.js'
    },
    // Specifies the name of .js file that resilted from $ npm run build and its location
    output: {
        // Disadvantage: creates file structure dependency for the project
        // (if you move to other folder it breaks)
        // path: 'Use/absolute/path'
        // Came from $ npm install path --save
        path: path.resolve(__dirname,'build'),
        // filename: 'build.js'
        // filename: '../build/build.js'
        filename: 'js/[name].js',
        // filename: 'js/[name].[contenthash].js'

        // Ex: js/1.js (node_module); js/2.js (you wrote); js/3.js (node_moduel)
        // https:server.com/assets/js/1.js
        publicPath: '/assets/'
    } 
}