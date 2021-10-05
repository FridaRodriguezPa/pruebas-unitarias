import { multi } from '../multi';

test(' 1 x 2 to equal 2', () => {
  expect(multi(1, 2)).toBe(2);
});