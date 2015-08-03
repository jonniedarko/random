'use strict';


/*function quick(array, size, left){


		var size = size || array.length;
		if(size < 2) return;

		// << 0 same as math.ceil
		var i = (size / 2) << 0;
		var pivot = array[i];
		//var left = array[0];
		//var right = array[array.length -1];
		var left = left || 0;
		var right = size -1;
		while(left < right){
			while(left< pivot){
				left +=1;
			}
			while(right > pivot){
				right -=1;
			}
			var temp = array[left];
			array[left] = array[right];
			array[right] = temp;
		}
		var leftArray = quick(array, left) || [];
		var rightArray = quick(array, right, left+1) || [];
		return leftArray.concat(rightArray);

};*/

var Quicksort = (function() {

	/**
	 * Swaps two values in the heap
	 *
	 * @param {int} indexA Index of the first item to be swapped
	 * @param {int} indexB Index of the second item to be swapped
	 */
	function swap(array, indexA, indexB) {
		var temp = array[indexA];
		array[indexA] = array[indexB];
		array[indexB] = temp;
	}

	/**
	 * Partitions the (sub)array into values less than and greater
	 * than the pivot value
	 *
	 * @param {Array} array The target array
	 * @param {int} pivot The index of the pivot
	 * @param {int} left The index of the leftmost element
	 * @param {int} left The index of the rightmost element
	 */
	function partition(array, pivot, left, right) {

		var storeIndex = left,
			pivotValue = array[pivot];

		// put the pivot on the right
		swap(array, pivot, right);

		// go through the rest
		for(var v = left; v < right; v++) {

			// if the value is less than the pivot's
			// value put it to the left of the pivot
			// point and move the pivot point along one
			if(array[v] < pivotValue) {
				swap(array, v, storeIndex);
				storeIndex++;
			}
		}

		// finally put the pivot in the correct place
		swap(array, right, storeIndex);

		return storeIndex;
	}

	/**
	 * Sorts the (sub-)array
	 *
	 * @param {Array} array The target array
	 * @param {int} left The index of the leftmost element, defaults 0
	 * @param {int} left The index of the rightmost element,
	 defaults array.length-1
	 */
	function sort(array, left, right) {

		var pivot = null;

		if(typeof left !== 'number') {
			left = 0;
		}

		if(typeof right !== 'number') {
			right = array.length - 1;
		}

		// effectively set our base
		// case here. When left == right
		// we'll stop
		if(left < right) {

			// pick a pivot between left and right
			// and update it once we've partitioned
			// the array to values < than or > than
			// the pivot value
			pivot     = left + Math.ceil((right - left) * 0.5);
			var newPivot  = partition(array, pivot, left, right);

			// recursively sort to the left and right
			sort(array, left, newPivot - 1);
			sort(array, newPivot + 1, right);
		}

	}

	return sort

})();

function merge(array1, array2){

};

function bubble(array){
	var swapped;
	do{
		swapped = false;
		for(var i = 0; i< array.length -1; i++){
			if(array[i]> array[ i+1]){

				var temp  = array[i];
				array[i] = array[ i+1];
				array[ i+1] = temp;
				swapped = true;
			}
		}

	}while(swapped);

	return array;
};

function insert(array){

	for(var currentIndex = 0, len = array.length; currentIndex< len; currentIndex++){
		if(currentIndex == 0) continue;
		var pervious = 1;
		var i = currentIndex;
		while(array[i]< array[i - 1]){
			var temp = array[i - pervious];
			array[i - pervious] = array[i];
			array[i] = temp;
			i--;
		}
	}
	return array;
};

module.exports = {
	bubble:bubble,
	insert: insert,
	quick: Quicksort
};
