import { findMultiplesInRange } from "./utils";

test("returns a set with correct multiples ", () => {
  expect(Array.from(findMultiplesInRange(4, 12))).toEqual([4, 8, 12]);
});

test("returns an empty set when incorrect values ", () => {
  expect(Array.from(findMultiplesInRange(null, 0))).toEqual([]);
  expect(Array.from(findMultiplesInRange(12, 4))).toEqual([]);
  expect(Array.from(findMultiplesInRange(0, 0))).toEqual([]);
});
