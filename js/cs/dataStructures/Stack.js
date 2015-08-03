/**
 * Created by Jonnie on 01 May 2015.
 */

var Stack = function(size){

	var stack = new Array();
	var maxSize = size || null;

	this.push = function(item){
		if(maxSize && stack.length < maxSize) {
			stack.push(item);
		}else if(maxSize){
			return new Error('Stack Full')
		}
		else{
			stack.push(item)
		}
	};

	this.pop = function(){
		if(stack.length > 0) {
			return stack.pop();
		}else {
			return new Error('Stack Already Empty');
		}
	};

};

module.exports = Stack;
