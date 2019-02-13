var assert = require('assert');
var {fib, fizzbuzz} = require('../src/app.js');

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
// 1,1,2,3,5,8,11,19,30,49,79

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