'use strict';
var expect = require('chai').expect;
var ToNumber = require('../src/ToNumber.js');

describe('ToNumber abstract operation implemenation test', () => {
	it('should return the same number than the native number conversion for non-objects', () => {
		expect(ToNumber(123)).to.equal(Number(123)).and.to.equal(123);
		expect(ToNumber(123.5)).to.equal(Number(123.5)).and.to.equal(123.5);

		expect(ToNumber(NaN)).to.be.NaN;
		
		expect(ToNumber(true)).to.equal(Number(true)).and.to.equal(1);
		expect(ToNumber(false)).to.equal(Number(false)).and.to.equal(0);
		
		expect(ToNumber(null)).to.equal(Number(null)).and.to.equal(0);
		
		expect(ToNumber(undefined)).to.be.NaN

		expect(ToNumber("123")).to.equal(Number("123")).and.to.equal(123);
		expect(ToNumber("123.56")).to.equal(Number("123.56")).and.to.equal(123.56);
		expect(ToNumber("HelloWorld")).to.be.NaN;
	});

	it('should return the same number than the native number conversion for a plain object', () => {
		let a = {};

		expect(Number(a)).to.be.NaN;
		expect(ToNumber(a)).to.be.NaN;
	});

	it('should return what obj.valueOf() returns when it returns a primitive', () => {
		let a = {};
		a.valueOf = function () {
			return 123;
		}

		expect(ToNumber(a)).to.equal(Number(a)).and.to.equal(123);

		a.valueOf = function () {
			return true;
		}

		expect(ToNumber(a)).to.equal(Number(a)).and.to.equal(1);

		a.valueOf = function () {
			return "hello";
		}

		expect(Number(a)).to.be.NaN;
		expect(ToNumber(a)).to.be.NaN;
	});

	it('should retun what toString() returns when obj.valueOf() does not return a primitive and obj.toString() does return a primitive', () => {
		let a = {};
		a.valueOf = function () {
			return []; // not a primitive!
		}

		a.toString = function() {
			return "123.5";
		}

		expect(ToNumber(a)).to.equal(Number(a)).and.to.equal(123.5);

		a.toString = function () {
			return "hello";
		}

		expect(Number(a)).to.be.NaN;
		expect(ToNumber(a)).to.be.NaN;
	});

	it('should throw a TypeError when neither obj.toString() and obj.valueOf() return a primitive', () => {
		let a = {};
		a.toString = function () {
			return []; // not a primitive!
		}

		a.valueOf = function () {
			return []; // not a primitive!
		}

		expect(String.bind(this, a)).to.throw(
			TypeError,
			"Cannot convert object to primitive value"
		);

		expect(ToNumber.bind(this, a)).to.throw(
			TypeError,
			"Cannot convert object to primitive value"
		);
	});
});