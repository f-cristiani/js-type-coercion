"use strict"

function ToBoolean(a) {
	if (a === null) {
		return false;
	}
	
	if (a === undefined) {
		return false;
	}
	
	if (typeof a === "number") {
		if (a === 0 || isNaN(a)) {
			return false;
		}
	}

	if (typeof a === "string") {
		if (a.length === 0) {
			return false;
		}
	}

	return true;
}

module.exports = ToNumber;