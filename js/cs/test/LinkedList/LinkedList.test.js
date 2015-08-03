var chai = require('chai');
chai.should();
var LLUtil = require('../../dataStructures/LinkedList/LinkedList');
var Node = LLUtil.Node;
var LinkedList = LLUtil.LinkedList;

describe('LinkedList', function(){

	describe('LinkedList', function(){
		var linkedList;
		var node1Value = 'node 1';
		var node2Value = 'node 2';
		var node3Value = 'node 3';
		var node4Value = 'node 4';

		it('create a LinkedList (Strings)', function(){

			var node = new Node(node1Value);
			node.should.have.a.property('value');
			node.value.should.equal(node1Value)
			node.should.have.a.property('next');
			(node.next == null).should.equal(true)

			linkedList = new LinkedList(node)
			linkedList.should.have.a.property('head');
			linkedList.head.should.equal(node);
			linkedList.toString().should.equal(node1Value);
		})

		it('insert at End of LinkedList', function(){
			linkedList.size().should.equal(1)
			linkedList.insertAtEnd(new Node(node2Value));
			linkedList.size().should.equal(2)
			linkedList.toString().should.equal(node1Value + ' ' + node2Value);

		});

		it('insert at Start of LinkedList', function(){
			linkedList.size().should.equal(2)
			linkedList.insertAtStart(new Node(node3Value));
			linkedList.size().should.equal(3)
			linkedList.toString().should.equal(node3Value + ' ' + node1Value + ' ' + node2Value);
		});

		it('search a linkedList', function (){
			linkedList.search(node1Value).should.equal(true);
			linkedList.search(node4Value).should.equal(false);
			linkedList.insertAtEnd(new Node (node4Value));
			linkedList.search(node4Value).should.equal(true);
			linkedList.size().should.equal(4)
		});

		it('reverse a linkedList', function (){
			linkedList = linkedList.reverse();
			linkedList.toString().should.equal(node4Value + ' ' + node2Value + ' ' + node1Value + ' ' + node3Value);
		});

		it('remove Item from linkedList', function(){
			linkedList.size().should.equal(4);
			linkedList.remove(node1Value);
			linkedList.size().should.equal(3);
			linkedList.toString().should.equal(node4Value + ' ' + node2Value  + ' ' + node3Value);
		})

	});
});