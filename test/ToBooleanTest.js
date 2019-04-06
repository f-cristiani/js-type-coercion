'use strict';
var expect = require('chai').expect;
var ToBoolean = require('../src/ToBoolean.js');

describe('ToBoolean abstract operation implemenation test', () => {
	it('should return false for undefined', () => {
		assertToBoolean(undefined, false);
	});

	it('should return false for null', () => {
		assertToBoolean(null, false);
	});

	it('should return false for zero and NaN and true for non-zero numbers', () => {
		assertToBoolean(0, false);
		assertToBoolean(+0, false);
		assertToBoolean(-0, false);
		assertToBoolean(NaN, false);

		assertToBoolean(1, true);
		assertToBoolean(12345.678, true);
	});

	it('should return false for empty strings and true for non-empty strings', () => {
		assertToBoolean("", false);
		assertToBoolean(" ", true);
	});

	it('should return true for objects', () => {
		assertToBoolean({}, true);
		assertToBoolean({hello: "world"}, true);
		assertToBoolean([1, 2, 3], true);
		assertToBoolean(new Date(), true);
	});
});

function assertToBoolean(val, expectedBooleanValue) {
	expect(ToBoolean(val)).to.equal(Boolean(val)).and.to.equal(expectedBooleanValue);
}