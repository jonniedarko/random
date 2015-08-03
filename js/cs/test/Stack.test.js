/**
 * Created by Jonnie on 01 May 2015.
 */
var chai = require('chai');
chai.should();

var Stack = require('../dataStructures/Stack');

describe('Stack', function() {
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