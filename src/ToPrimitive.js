function ToPrimitive(input, preferredType) {
	if (preferredType === Number) {
		return primitiveToNumber(input);
	}

	if (preferredType === String) {
		return primitiveToString(input);	
	}

	if (input instanceof Date) {
		return primitiveToString(input);
	} else {
		return primitiveToNumber(input);
	}
}

function primitiveToString(value) {
	let toString = value.toString();

	if (isPrimitive(toString)) {
		return toString;
	}

	let valueOf = value.valueOf();
	if (isPrimitive(valueOf)) {
		return valueOf;
	}
	
	throw new TypeError("Cannot convert object to primitive value");
}

function primitiveToNumber(value) {
	let valueOf = value.valueOf();
	if (isPrimitive(valueOf)) {
		return valueOf;
	}

	let toString = value.toString();
	if (isPrimitive(toString)) {
		return toString;
	}

	throw new TypeError("Cannot convert object to primitive value");
}

function isPrimitive(value) {
	return (value !== Object(value));
}

module.exports = ToPrimitive;