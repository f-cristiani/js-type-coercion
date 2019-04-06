"use strict"

const ToPrimitive = require("./ToPrimitive.js");

function ToNumber(a) {
	if (a === null) {
		return +0;
	}
	
	if (a === undefined) {
		return NaN;
	}
	
	if (typeof a === "boolean") {
		return (a === true) ? 1 : 0;
	}

	if (typeof a === "number") {
		return a;
	}

	if (typeof a === "string") {
		// Not implementing string to number conversion for the sake of simplicity.
		return Number(a);
	}

	if (typeof a === "object") {
		let primValue = ToPrimitive(a, Number);
		return ToNumber(primValue);
	}
}

module.exports = ToNumber;