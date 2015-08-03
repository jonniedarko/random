'use strict';

function linear(value, array){

	for(var i= 0, size = array.length; i< size; i++){
		if(array[i] == value){
			return i;
		}
	}
	return null;
}

function binary(value, sortedArray){
	var min = 0;
	var max = sortedArray.length -1;
	var currentIndex;

	while(min<=max){
		currentIndex = max - min/2 | 0
		if(sortedArray[currentIndex] == value ) return currentIndex;

		if(sortedArray[currentIndex] >  value){
			min = currentIndex + 1;
		}else{
			max = currentIndex - 1;
		}
	}
	return -1;
}

module.exports = {
	linear : linear,
	binary : binary
};