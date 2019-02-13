// Standard fibonacci puzzle
function fib(n){
	for(var i=1,j=0,k=0;n--;i=i+j,j=k,k=i);// Semicolon required here
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

module.exports = {fib, fizzbuzz};
