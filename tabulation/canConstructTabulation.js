/* Write a function that accepts a target string and an array of string.
The function should return a boolean(true,false) indicating whether or not the target can be constructed by concatenating elements of the wordBank array.

You may reuse the elements of wordBank array as many times.
time complexity = O(m^2 * n) m = targetSum, n = wordBank.length
space complexity = O(m)
*/

const canConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (const word of wordBank) {
        // if the word matches the characters stating at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

console.log(
  canConstructTabulation("abcdef", ["ab", "abc", "cd", "def", "abcd"])
);
console.log(
  canConstructTabulation(
    "skateboard",
    ["bo", "rd", "ate", "t", "ska", "sk"],
    "boar"
  )
);

console.log(
  canConstructTabulation("eeeeeeeeeeeeeeeff", [
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeeeee",
  ])
);
