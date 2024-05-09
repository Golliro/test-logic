export const intOddAppearProblem = (arr: number[]): number => {
  const count = {};
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  return Number(Object.keys(count).find((key) => count[key] % 2 !== 0));
};
