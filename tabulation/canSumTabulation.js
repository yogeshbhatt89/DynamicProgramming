const canSumTabulation = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
};

console.log(canSumTabulation(7, [2, 3]));
console.log(canSumTabulation(7, [5, 3, 4, 7]));
console.log(canSumTabulation(7, [2, 4]));
console.log(canSumTabulation(7, [2, 3, 5]));
console.log(canSumTabulation(300, [7, 14]));
