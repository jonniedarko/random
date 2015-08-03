/**
 * Created by John on 01 May 2015.
 *
 * Solution for http://www.nerdparadise.com/tech/interview/reverselinkedlist/
 */
var Node = function (value) {
	this.value = value;
	this.next = null;
	return this;
};

var LinkedList = function (node) {
	this.head = node;
	return this;
};

LinkedList.prototype.insertAtEnd = function (newNode, current) {
	var currentNode = current || this.head;

	if (currentNode.next !== null) {
		return this.insertAtEnd(newNode, currentNode.next);
	} else {
		return currentNode.next = newNode;
	}
};

LinkedList.prototype.insertAtStart = function (newNode) {
	newNode.next = this.head;
	this.head = newNode;
};

LinkedList.prototype.search = function (searchValue, currentNode) {
	var currentNode = currentNode || this.head;
	if (currentNode.value == searchValue) {
		return true;
	}
	else if (currentNode.next !== null) {
		return this.search(searchValue, currentNode.next);
	}
	else {
		return false;
	}
};

LinkedList.prototype.remove = function (removeValue, currentNode, parentNode) {
	var currentNode = currentNode || this.head;
	if (currentNode.value == removeValue) {
		if (currentNode.next != null) {
			parentNode.next = currentNode.next;
		}
		else {
			parentNode.next = null;
		}
	} else if (currentNode.next != null) {
		return this.remove(removeValue, currentNode.next, currentNode);
	}
};

LinkedList.prototype.size = function (currentNode, length) {
	var currentNode = currentNode || this.head;
	var length = length || 1;
	if (currentNode.next != null) {
		return this.size(currentNode.next, length + 1);
	} else {
		return length;
	}
};

LinkedList.prototype.toString = function (currentNode) {
	var currentNode = currentNode || this.head;
	var str = currentNode.value || '';
	if (currentNode.next != null) {
		return str + " " + this.toString(currentNode.next);
	} else {
		return str;
	}
};

LinkedList.prototype.reverse = function () {
	var currentNode = this.head;
	var reversedList = null;
	while (currentNode != null) {
		var nextNode = currentNode.next;
		if (reversedList == null) {
			currentNode.next = null;
			reversedList = new LinkedList(currentNode);
			currentNode = nextNode;
		} else {
			currentNode.next = null;
			if (currentNode != null) {
				reversedList.insertAtStart(currentNode);
			}
			currentNode = nextNode;
		}
	}

	return reversedList;
};

module.exports = {
	Node: Node,
	LinkedList: LinkedList
};