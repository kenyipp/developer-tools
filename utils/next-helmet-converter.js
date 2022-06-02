"use strict";

const _ = require("lodash");
const helmet = require("helmet");

function converter(config) {
	const headers = {};
	const res = {
		setHeader(key, value) {
			headers[key] = value;
		},
		removeHeader: _.noop
	};
	helmet(config)({}, res, _.noop);
	return _.map(headers, (value, key) => ({ key, value }));
}

module.exports.convert = converter;
