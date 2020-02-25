const path = require('path')

module.exports = {
    // this is actually the configuration webpack uses
    
    // This results a nice, verbose output in main.js 
    mode: 'development',
    // This results a compressed, performance oriented main.js
    // mode: 'production'

    // This is the default path for the entry point
    // entry: './src/index.js'
    entry: './src/engine.js',
    // Note: you can also specify multiple entry points like an object (or key-value pair)

    // Specifies the name of .js file that resilted from $ npm run build and its location
    output: {
        // Disadvantage: creates file structure dependency for the project
        // (if you move to other folder it breaks)
        // path: 'Use/absolute/path'
        // Came from $ npm install path --save
        path: path.resolve(__dirname,'build'),
        filename: 'build.js'
        // filename: '../build/build.js'
    } 
}