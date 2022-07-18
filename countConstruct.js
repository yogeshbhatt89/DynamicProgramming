/*Write a function that accepts a target string and an array of string.
The function should return a count indicating how  many combinations can be constructed by concatenating elements of the wordBank array
You may reuse elements of the wordBank as many times as needed */

// time complexity = O(n * m^2)
// space complexity = O(m^2)
const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWaysForRest = countConstruct(suffix, wordBank, memo);
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
// console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeeeee",
  ])
);
