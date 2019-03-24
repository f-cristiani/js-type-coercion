"use strict"

const ToPrimitive = require("./ToPrimitive.js");

function ToNumber(a) {
	if (a === null) {
		return +0;
	}
	
	if (a === undefined) {
		return NaN;
	}
	
	let val = a;
	if (typeof a === "object") {
		val = ToPrimitive(a, Number);
	}

	return Number(val);
}

module.exports = ToNumber;