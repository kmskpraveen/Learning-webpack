module.exports = {
    // this is actually the configuration webpack uses
    
    // This results a nice, verbose output in main.js 
    mode: 'development',
    // This results a compressed, performance oriented main.js
    // mode: 'production'

    // This is the default path for the entry point
    // entry: './src/index.js'
    entry: './src/engine.js',
    // Note: ypu can also specify multiple entry points like an object (or key-value pair)

    // Specifies the name of .js file that resilted from $ npm run build and its location
    output: {
        filename: '../build/build.js'
    } 
}