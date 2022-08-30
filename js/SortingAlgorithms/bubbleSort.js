/**
 * Sort an array of integers using Bubble sort
 */
const BubbleSort = (arr) => {
  let checkAllElements;
  do {
    checkAllElements = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        checkAllElements = true;
      }
    }
  } while (checkAllElements);
  return arr;
};

console.log(BubbleSort([-2, -3, -8, 0, 20, 8, 5, 10])); //[-8,-3,-2,0,5,8,10,20]
console.log(BubbleSort([20, 3, -2, -10, 0, 50, 2, -9])); //[-10,-9,-2,0,2,3,20,50]

// time complexity - O(n^2) nested loops
