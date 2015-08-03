'use strict';

var LLUtil = require('./dataStructures/LinkedList/LinkedList');
var LinkedList = LLUtil.LinkedList;
var Node = LLUtil.Node;

var linkedList = new LinkedList(new Node('One'));
console.log(linkedList.toString());

linkedList.insertAtEnd(new Node('Two'));
console.log(linkedList.toString());

linkedList.insertAtEnd(new Node('Three'));
console.log(linkedList.toString());

linkedList.insertAtStart(new Node('Zero'));
console.log(linkedList.toString());

console.log('size:', linkedList.size());

console.log(linkedList.toString());
var reversedList = linkedList.reverse();
console.log(reversedList.toString());

linkedList.remove('Three');
console.log(linkedList.toString());

console.log(linkedList.search('Three'));

