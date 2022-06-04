"use strict";

function getRememberString(e) {
	var a = ["apple", "bestbuy", "coffee", "drip", "egg", "fruit", "golf", "hulu", "iphone", "jack", "korean", "laptop", "music", "nut", "omelet", "park", "queen", "rope", "skype", "tokyo", "usa", "visa", "walmart", "xbox", "yelp", "zip"];
	var d = "";
	for (var b = 0; b < e.length; b++) {
		var f = e.charCodeAt(b);
		if (65 <= f && f <= 90) {
			f -= 65;
			d += a[f].toUpperCase();
		} else {
			if (97 <= f && f <= 122) {
				f -= 97;
				d += a[f];
			} else {
				d += e.substring(b, b + 1);
			}
		}
		d += " ";
	}
	return d;
}

module.exports = getRememberString;
