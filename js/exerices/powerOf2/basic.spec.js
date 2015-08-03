var chai = require('chai');
var expect = chai.expect;

var basic = require('./basic');

describe('Power of 2', function(){

	it('check small numbers is power of 2', function(){
		expect(basic.isPowerOf2(2)).to.eq(true);
		expect(basic.isPowerOf2(4)).to.eq(true);
		expect(basic.isPowerOf2(8)).to.eq(true);
		expect(basic.isPowerOf2(9)).to.eq(false);
	});

	it('check large numbers', function (){
		expect(basic.isPowerOf2(4294967296)).to.eq(true);
	})
})