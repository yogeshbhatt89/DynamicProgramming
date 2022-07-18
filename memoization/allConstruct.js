/*Write a function that accepts a target string and an array of string.
The function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array. Each element of the 2D array should represent one combination that constructs the target.
You may reuse elements of the wordBank as many times as needed */

// time complexity = O(n^m)
// space complexity = O(m)
const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
// console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeeeee",
  ])
);
