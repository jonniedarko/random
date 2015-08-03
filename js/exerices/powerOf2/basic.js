// Write a function that returns true or false based on if a number passed to it is a power of 2
function isPowerOf2(number, fn) {
	if(number > Number.MAX_SAFE_INTEGER || isNaN(number)){
		console.log('Number too big');
		throw new Error('Number too big');
	}
	if(fn && number < 10){
		fn('number', number);
	}
	if(number % 2 != 0){
		return false
	}
	else if(number/2 > 1){
		return isPowerOf2(number/2);
	}
	else {
		return true;
	}

}

module.exports = {
	isPowerOf2: isPowerOf2
};