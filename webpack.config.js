const production = process.env.NODE_ENV === 'production' ? true : false;

'use strict';

module.exports = {
    devtool: production ? null : 'sourcemaps',

    entry: __dirname + '/index.js',

    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js',
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2'],
            },
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }, ],
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
};
