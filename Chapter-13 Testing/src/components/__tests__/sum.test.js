import { sum } from '../sum';

test('Check sum of 2 positive numbers', () => {
	expect(sum(2, 5)).toBe(7);
  expect(sum(2, 5)).not.toBe(5);
});


// jest understands expect, no need to import it