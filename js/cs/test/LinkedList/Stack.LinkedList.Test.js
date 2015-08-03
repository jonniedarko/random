'use strict';
var chai = require('chai');
chai.should();
var Stack = require('../../dataStructures/LinkedList/Stack');

describe('Stack using LinkedList', function() {

	var stack;

	it('create Stack', function () {
		stack = new Stack(10);
		var temp = {x:3, y:'three'};
		stack.push(1);
		stack.push('two');
		stack.push(temp);

		stack.pop().should.equal(temp)

	});

});
