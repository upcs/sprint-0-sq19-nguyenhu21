const add = require('./js/functions.js');

test('add 3 + 3 to equal 6', () => {
	expect(add(3, 3)).toBe(6);
});

test('add 4 + 6 to equal 10', () => {
	expect(add(4, 6)).toBe(9);
});