const findMultiplesInRange = (
  lowerBound: number | null,
  upperBound: number
): Set<number> => {
  const set = new Set<number>();
  if (lowerBound === null || lowerBound <= 0 || upperBound <= 0) {
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
