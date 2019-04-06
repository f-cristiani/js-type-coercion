'use strict';
const expect = require('chai').expect;
const additionOperator = require('../../src/operators/AdditionOperator');

describe('AdditionOperator implemenation test', () => {
	it('should return the correct value for primitives', () => {
		expect(additionOperator.apply(1, 2))
			.to.equal(1 + 2)
			.and.to.equal(3);

		expect(additionOperator.apply("hello", "world"))
			.to.equal("hello" + "world")
			.and.to.equal("helloworld");

		expect(additionOperator.apply("123", 456))
			.to.equal("123" + 456)
			.and.to.equal("123456");

		expect(additionOperator.apply(123, "456"))
			.to.equal(123 + "456")
			.and.to.equal("123456");

		expect(additionOperator.apply(123, true))
			.to.equal(123 + true)
			.and.to.equal(124);

		expect(additionOperator.apply("123", true))
			.to.equal("123" + true)
			.and.to.equal("123true");

		expect(additionOperator.apply(123, null))
			.to.equal(123 + null)
			.and.to.equal(123);

		expect(123 + NaN).to.be.NaN;
		expect(additionOperator.apply(123, NaN)).to.be.NaN;
	});

	it('should return the correct value for a plain object', () => {
		let a = {};

		expect(additionOperator.apply(a, 123))
			.to.equal(a + 123)
			.and.to.equal(a.toString().concat(String(123)));
	});

	it('should return the correct value for an object with valueOf() returning a number', () => {
		let a = {};
		a.valueOf = function() {
			return 1;
		}

		expect(additionOperator.apply(a, 2))
			.to.equal(1 + 2)
			.and.to.equal(3);
	});

	it('should return the correct value for an object with valueOf() returning a string', () => {
		let a = {};
		a.valueOf = function () {
			return "1";
		}

		expect(additionOperator.apply(a, 2))
			.to.equal(a + 2)
			.and.to.equal("12");
	});
});