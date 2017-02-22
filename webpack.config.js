const path = require('path');

module.exports = {
    entry: {
        bundle: './src/todoApp/todo.js'
    },
    output: {
        path: path.join(__dirname, 'dist/todoApp'),
        filename: 'todo.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
        ]
    }
};
