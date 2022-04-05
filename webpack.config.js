//Entrypoint: where does the ap kick off. Where does the output bundle file go?
const path = require('path');

module.exports = {
    //the file that get's executed and loaded by default
    entry: './src/app.js',
    //where all of that goes
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            //checks that file ends in .js
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //configures source map that's great for development, allows console to show errors
    //directly in react code and not in the bundler
    devtool: 'cheap-module-eval-source-map',
    //allows us to just run webpack and not use live server to serve up the application
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
};

// loader allows u to customize webpack behavior on how to react to certain things. 