// Standard fibonacci puzzle
function fib(n){
	/**
	 * i: Current value
	 * j: Previous to last value
	 * k: Last value
	 */
	for(var i=0,j=1,k=0;n--;i=i+j,j=k,k=i);// Semicolon required here
	// Only return i after n has counted down
	return i;
}
// 1,1,2,3,5,8,13,21,34,55


// Standard fizzbuzz puzzle
function fizzbuzz(n){
	// If not a multiple of either then return the number
	return n%3 && n%5? n:
		// otherwise return string appending fizz for multiple of 3
		(n%3?'':'fizz')+
		// and append buzz for multiple of 5
		(n%5?'':'buzz');
}
// 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'
// n=>n%3 && n%5? n: (n%3?'':'fizz')+(n%5?'':'buzz')

// Standard fizzbuzz puzzle
function fizzbuzz2(n){
	return (n%3?'':'fizz') // Return fizz for a multiple of 3
		+ (n%5?'':'buzz') // and append buzz for multiple of 5
		|| n; // if nothing so far then return the number
}
// 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'
// n=>(n%3?'':'fizz')+(n%5?'':'buzz')||n


module.exports = {fib, fizzbuzz, fizzbuzz2};
