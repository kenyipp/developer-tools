"use strict";

const _ = require("lodash");
const webpack = require("webpack");
const nextBuildId = require("next-build-id");

// Webpack configs
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const helmetConfig = require("./constants/helmet.config");

const alias = require("./constants/alias");
const converter = require("./utils/next-helmet-converter");

module.exports = () => ({

	distDir: process.env.NODE_ENV === "production" ? "build" : undefined,
	poweredByHeader: false,

	// Use if you need CDN support
	assetPrefix: "",

	generateBuildId() {
		return nextBuildId({ dir: __dirname });
	},

	headers() {
		const defaultHeaders = converter.convert(helmetConfig);
		return [
			{
				source: "/",
				headers: defaultHeaders
			},
			{
				source: "/:path*",
				headers: defaultHeaders
			}
		];
	},

	webpack(config) {

		config.plugins.push(
			new LodashModuleReplacementPlugin(),
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/)
		);

		/**
		 *
		 * absolute-import
		 * https://github.com/zeit/next.js/blob/master/examples/with-absolute-imports/next.config.js
		 *
		 */
		config.resolve.alias = _.defaults(config.resolve.alias, alias);

		return config;
	},
	pageExtensions: ["js", "jsx"]
});
