"use strict"

const ToPrimitive = require("./ToPrimitive.js");

function ToString(a) {
	if (a === null) {
		return "null";
	}
	
	if (a === undefined) {
		return "undefined";
	}
	
	let val = a;
	if (typeof a === "object") {
		val = ToPrimitive(a, String);
	}

	return String(val);
}

module.exports = ToString;