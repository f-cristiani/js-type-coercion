"use strict"

const ToPrimitive = require("../ToPrimitive");
const ToString = require("../ToString");
const ToNumber = require("../ToNumber");

function AdditionOperator() {
	this.apply = function(a, b) {
		let aPrim = ToPrimitive(a);
		let bPrim = ToPrimitive(b);

		if (typeof aPrim === "string" || typeof bPrim === "string") {
			return ToString(aPrim).concat(ToString(bPrim));
		}

		return ToNumber(a) + ToNumber(b);
	}
}

module.exports = new AdditionOperator();