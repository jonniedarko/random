'use strict';

var LinkedList = require('./LinkedList').LinkedList;
var Node = require('./LinkedList').Node;

var Queue = function(size){
	var queue = null;
	var maxSize = size || null;
	var count = 0;

	this.push = function(item){
		if(count === maxSize){
			return new Error('Queue Full');
		}

		if(queue === null){
			queue = new LinkedList(new Node(item));

		}else{
			queue.insertAtEnd(new Node(item));
		}
	};

	this.pop = function(){
		if(queue.size() == 0) return new Error('Queue Already Empty');
		var popped = queue.head;
		queue.head = popped.next;
		popped.next = null;
		return popped.value;
	};
};

module.exports = Queue;