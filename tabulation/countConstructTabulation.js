/*Write a function that accepts a target string and an array of string.
The function should return the number of ways that the target can be constructed by concatenating elements of the wordBank array.
You may reuse elements of wordBank as many times as needed
time complexity = O(m^2 * n) m = target.length, n = wordBank.length
space complexity = O(m)
*/

const countConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      // if the word matches the characters stating at position i
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
};

console.log(
  countConstructTabulation("purple", ["purp", "p", "ur", "le", "purpl"])
);
console.log(
  countConstructTabulation(
    "skateboard",
    ["bo", "rd", "ate", "t", "ska", "sk"],
    "boar"
  )
);
console.log(
  countConstructTabulation("eeeeeeeeeeeeeeeff", [
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeeeee",
  ])
);
