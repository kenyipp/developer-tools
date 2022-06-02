"use strict";

const path = require("path");

const alias = {
	components: path.join(__dirname, "../components"),
	modules: path.join(__dirname, "../modules"),
	constants: path.join(__dirname, "../constants"),
	api: path.join(__dirname, "../api"),
	utils: path.join(__dirname, "../utils"),
	modal: path.join(__dirname, "../modal")
};

module.exports = alias;
