/*Write a function that accepts a target string and an array of string.
The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array
You may reuse elements of the wordBank as many times as needed */

// time complexity = O(n * m^2)
// space complexity = O(m^2)
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
// console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeeeee",
  ])
);
