// const le

export const stringSufflingsProblem = (input: string): string[] => {
  console.log(input);
  if (input.length <= 1) {
    return [input];
  }
  const permutations = [];

  const firstChar = input[0];
  console.log(firstChar);
  const remainingChars = input.slice(1);

  console.log(remainingChars);

  const remainingPermutations = stringSufflingsProblem(remainingChars);
  console.log(remainingPermutations);
  remainingPermutations.forEach((permutation) => {
    console.log(permutation);
    console.log(permutation.length);
    for (let i = 0; i <= permutation.length; i++) {
      const newPermutation =
        permutation.slice(0, i) + firstChar + permutation.slice(i);
      console.log(newPermutation);
      permutations.push(newPermutation);
    }
  });
  console.log(permutations);
  return [...new Set(permutations)];
};
