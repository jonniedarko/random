'use strict';

var LinkedList = require('./LinkedList').LinkedList;
var Node = require('./LinkedList').Node;

/**
 * Stack implemented using LinkedList
 *
 * @param size
 * @constructor
 */
var Stack = function(size){
	var stack = null;
	var maxSize = size || null;
	var count = 0;

	this.push = function(item){
		if(count === maxSize){
			return new Error('Stack Full');
		}

		if(stack === null){
			stack = new LinkedList(new Node(item));

		}else{
			stack.insertAtStart(new Node(item));
		}
	};

	this.pop = function(){
		var popped = stack.head;
		stack.head = popped.next;
		popped.next = null;
		return popped.value;
	};
};

module.exports = Stack;