const findMultiplesInRange = (
  lowerBound: number | null,
  upperBound: number
): Set<number> => {
  const set = new Set<number>();
  if (lowerBound === null) {
    return set;
  }
  let start = lowerBound;
  while (start <= upperBound) {
    set.add(start);
    start += lowerBound;
  }
  return set;
};

export { findMultiplesInRange };
