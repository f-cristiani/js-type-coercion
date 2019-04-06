"use strict"

const ToPrimitive = require("./ToPrimitive.js");

function ToString(a) {
	if (a === null) {
		return "null";
	}
	
	if (a === undefined) {
		return "undefined";
	}
	
	if (typeof a === "boolean") {
		return (a === true) ? "true" : "false";
	}

	if (typeof a === "number") {
		// Not implementing number to string conversion for the sake of simplicity.
		return String(a);
	}

	if(typeof a === "string") {
		return a;
	}

	if (typeof a === "object") {
		let primValue = ToPrimitive(a, String);
		return ToString(primValue);
	}
}

module.exports = ToString;