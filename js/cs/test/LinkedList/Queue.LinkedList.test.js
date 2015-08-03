'use strict';
var chai = require('chai');
chai.should();

var Queue = require('../../dataStructures/LinkedList/Queue');

describe('Queue using LinkedList', function() {

	var queue;

	it('create Stack', function () {
		queue = new Queue(10);
		var temp = {x:3, y:'three'};
		queue.push(1);
		queue.push('two');
		queue.push(temp);

		queue.pop().should.equal(1);
		queue.pop().should.equal('two');
		queue.pop().should.equal(temp);

	});

});