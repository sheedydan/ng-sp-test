module.exports = {
    entry: "./forecast.app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: { inline: true },
    module: {
        loaders: [{
            // JS LOADER
            // Reference: https://github.com/babel/babel-loader
            // Transpile .js files using babel-loader
            // Compiles ES6 and ES7 into ES5 code
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/

        }, {
            // HTML LOADER
            // Reference: https://github.com/webpack/raw-loader
            // Allow loading html through js
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    }
};