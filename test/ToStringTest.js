'use strict';
var expect = require('chai').expect;
var ToString = require('../src/ToString.js');

describe('ToString abstract operation implemenation test', () => {
	it('should return the same string than the native string conversion for non-objects', () => {
		expect(ToString(123)).to.equal(String(123)).and.to.equal("123");
		expect(ToString(123.5)).to.equal(String(123.5)).and.to.equal("123.5");
		expect(ToString(NaN)).to.equal(String(NaN)).and.to.equal("NaN");
		
		expect(ToString(true)).to.equal(String(true)).and.to.equal("true");
		
		expect(ToString(null)).to.equal(String(null)).and.to.equal("null");
		
		expect(ToString(undefined)).to.equal(String(undefined)).and.to.equal("undefined");

		expect(ToString("HelloWorld")).to.equal(String("HelloWorld")).and.to.equal("HelloWorld");
	});

	it('should return the same string than the native string conversion for a plain object', () => {
		let a = {};

		expect(ToString(a)).to.equal(String(a));
	});

	it('should return what obj.toString() returns when it returns a primitive', () => {
		let a = {};
		a.toString = function () {
			return "123";
		}

		expect(ToString(a)).to.equal(String(a)).and.to.equal("123");

		a.toString = function () {
			return true;
		}

		expect(ToString(a)).to.equal(String(a)).and.to.equal("true");
	});

	it('should retun what valueOf() returns when obj.toString() does not return a primitive and obj.valueOf() does return a primitive', () => {
		let a = {};
		a.toString = function () {
			return []; // not a primitive!
		}

		a.valueOf = function() {
			return "my value";
		}

		expect(ToString(a)).to.equal(String(a)).and.to.equal("my value");

		a.valueOf = function () {
			return 123.5;
		}

		expect(ToString(a)).to.equal(String(a)).and.to.equal("123.5");
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

		expect(ToString.bind(this, a)).to.throw(
			TypeError,
			"Cannot convert object to primitive value"
		);
	});
});