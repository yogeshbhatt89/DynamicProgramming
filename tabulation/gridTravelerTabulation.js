// Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m *n?
// Write a function that calculates this. memoization

// time complexity = O(m * n)
// space complexity = O(n * m)

const gridTravelerTabulation = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};

console.log(gridTravelerTabulation(1, 1));
console.log(gridTravelerTabulation(2, 3));
console.log(gridTravelerTabulation(4, 2));
console.log(gridTravelerTabulation(4, 4));
console.log(gridTravelerTabulation(5, 4));
console.log(gridTravelerTabulation(18, 18));
