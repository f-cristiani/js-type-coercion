"use strict"

function ToBoolean(a) {
	if (a === null) {
		return false;
	}
	
	if (a === undefined) {
		return false;
	}
	
	if (typeof a === "number") {
		return !(a === 0 || isNaN(a));
	}

	if (typeof a === "string") {
		return (a.length !== 0);
	}

	return true;
}

module.exports = ToBoolean;