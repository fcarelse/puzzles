var {fib, fizzbuzz, fizzbuzz2, treeBuilder, prevalentChar} = require('../src/app.js');
var {testList, testTree} = require('./genTestData.js')

// Testing fibonacci puzzle solution
test('Should evaluate to 1,1,2,3,5,8,13,21,34,55',()=>{
	expect(fib(1)).toBe(1);
	expect(fib(2)).toBe(1);
	expect(fib(3)).toBe(2);
	expect(fib(4)).toBe(3);
	expect(fib(5)).toBe(5);
	expect(fib(6)).toBe(8);
	expect(fib(7)).toBe(13);
	expect(fib(8)).toBe(21);
	expect(fib(9)).toBe(34);
	expect(fib(10)).toBe(55);
})
// 1,1,2,3,5,8,13,21,34,55

// Expected sequence supplied in the comment below test.
test('FizzBuzz standard output', ()=>{
	expect(fizzbuzz(1)).toBe(1);
	expect(fizzbuzz(2)).toBe(2);
	expect(fizzbuzz(3)).toBe('fizz');
	expect(fizzbuzz(4)).toBe(4);
	expect(fizzbuzz(5)).toBe('buzz');
	expect(fizzbuzz(6)).toBe('fizz');
	expect(fizzbuzz(7)).toBe(7);
	expect(fizzbuzz(8)).toBe(8);
	expect(fizzbuzz(9)).toBe('fizz');
	expect(fizzbuzz(10)).toBe('buzz');
	expect(fizzbuzz(11)).toBe(11);
	expect(fizzbuzz(12)).toBe('fizz');
	expect(fizzbuzz(13)).toBe(13);
	expect(fizzbuzz(14)).toBe(14);
	expect(fizzbuzz(15)).toBe('fizzbuzz');
})
// 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'

// Expected sequence supplied in the comment below test.
test('FizzBuzz2 standard output', ()=>{
	expect(fizzbuzz2(1)).toBe(1);
	expect(fizzbuzz2(2)).toBe(2);
	expect(fizzbuzz2(3)).toBe('fizz');
	expect(fizzbuzz2(4)).toBe(4);
	expect(fizzbuzz2(5)).toBe('buzz');
	expect(fizzbuzz2(6)).toBe('fizz');
	expect(fizzbuzz2(7)).toBe(7);
	expect(fizzbuzz2(8)).toBe(8);
	expect(fizzbuzz2(9)).toBe('fizz');
	expect(fizzbuzz2(10)).toBe('buzz');
	expect(fizzbuzz2(11)).toBe(11);
	expect(fizzbuzz2(12)).toBe('fizz');
	expect(fizzbuzz2(13)).toBe(13);
	expect(fizzbuzz2(14)).toBe(14);
	expect(fizzbuzz2(15)).toBe('fizzbuzz');
})
// 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'

// Expected tree in the constants below
test('Tree Builder', ()=>{
	expect(treeBuilder(testList)).toEqual(testTree);
})

// Expected to find most prevalent char in string
test('Prevalent Char', ()=>{
	expect(prevalentChar('abcccccccd')).toEqual('c');
	expect(prevalentChar('1231111')).toEqual('1');
})


