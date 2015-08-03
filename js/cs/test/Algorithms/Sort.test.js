'use strict';

var chai = require('chai');
chai.should();
var Sort = require('../../Algorithms/Sort');

describe('Sort', function() {

	it('Bubble Sort', function(){
		var testArray = [4,6,1,3,2,4,6,1,10,12];
		var result = Sort.bubble(testArray);

		result.should.deep.equal([1,1,2,3,4,4,6, 6,10, 12]);
	});

	it('Insert Sort', function(){
		var testArray = [4,6,1,3,2,4,6,1,10,12];
		var result = Sort.insert(testArray);

		result.should.deep.equal([1,1,2,3,4,4,6, 6,10, 12]);
	});

	it('Quick Sort', function(){
		var testArray = [4,6,1,3,2,4,6,1,10,12];
		Sort.quick(testArray);
		testArray.should.deep.equal([1,1,2,3,4,4,6, 6,10,12]);
	});


});