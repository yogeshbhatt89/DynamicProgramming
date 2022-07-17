/*Write a function that accepts a target string and an array of strings.
The function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array.
Each element of the 2dArray should represent one combination that constructs the target.

You may reuse elements of wordBank as many times as needed
time complexity = O(n^m) m = target.length, n = wordBank.length
space complexity = O(n^m)
*/

const allConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      // if the word matches the characters stating at position i
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }
  return table[target.length];
};

console.log(
  allConstructTabulation("purple", ["purp", "p", "ur", "le", "purpl"])
);
console.log(
  allConstructTabulation(
    "skateboard",
    ["bo", "rd", "ate", "t", "ska", "sk"],
    "boar"
  )
);
console.log(
  allConstructTabulation("eeeeeeeeeeeeeeeff", [
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeeeee",
  ])
);
