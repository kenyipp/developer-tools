"use strict";

const config = {
	contentSecurityPolicy: false,
	referrerPolicy: {
		policy: "no-referrer"
	},
	frameguard: {
		action: "deny"
	},
	permittedCrossDomainPolicies: {
		permittedPolicies: "none"
	},
	expectCt: {
		maxAge: 604800
	}
};

module.exports = config;
