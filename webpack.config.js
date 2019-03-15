'use strict';

const path = require('path');
const webpack = require('webpack');
const fullPath = path.resolve.bind(null, __dirname);


/**
 *
 */
const config = {
	entry: [
		'./index'
	],
	output: {
		path: fullPath('dist'),
		publicPath: '/dist/',
		filename: 'calendar-widget.js',
		chunkFilename: 'calendar-widget-[name].js'
	},
	resolve: {
		extensions: ['.js', '.json'],
		// allows peerDependencies in linked packages to work as
		// expected.
		// @see http://stackoverflow.com/a/33437838/2391359
		// @see https://github.com/npm/npm/issues/5080
		modules: [
			fullPath('node_modules')
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: fullPath('src'),
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	],
	stats: {
		moduleTrace: false
	}
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
} else {
	config.module.rules.push({
		test: /\.js$/,
		include: fullPath('js'),
		exclude: /node_modules/,
		loader: 'eslint-loader',
		enforce: 'pre',
		options: {
			emitError: false,
			emitWarning: true,
			failOnError: false,
			configFile: '.eslintrc.js'
		}
	});
}

module.exports = config;
