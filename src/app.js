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

const treeBuilder = (
	data = [],
	{ idKey = "id", parentKey = "parent", childrenKey = "children" } = {}
) => {
	const tree = [];
	const childrenOf = {};
	data.forEach(item => {
		const { [idKey]: id, [parentKey]: parentId = 0 } = item;
		item[childrenKey] = childrenOf[id] = childrenOf[id] || [];
		( parentId?
			(childrenOf[parentId] = childrenOf[parentId] || []):
			tree
		).push(item);
	});
	return tree;
};

const prevalentChar = (string) => {
	// List characters
	const list = string.split('');
	
	// reduce to an object with each unique character mapping to the number of occurences.
	const occurences = {}
	list.forEach((char)=>{
		if(!occurences[char]) occurences[char]=0;
		occurences[char]++;
	});

	// From a list of unique characters in the string
	const unique = Object.keys(occurences);

	// Return  the character that has the largest occurence.
	return unique.reduce((most, next)=>{
		return occurences[most]>occurences[next]? most: next;
	})
}

module.exports = {fib, fizzbuzz, fizzbuzz2, treeBuilder, prevalentChar};