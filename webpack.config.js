var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: './assets/js/index.js',
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    module: {
        loaders: [
            { 
				test: /\.js$/, exclude: /node_modules/, 
				loader: 'babel',
                query:
                {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'url-loader',			
			},
			{
				test: /\.mp3$/,
				loader: 'url-loader',
			}
        ]
    }
};
