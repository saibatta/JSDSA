/**
 * Given an unsorted array find the index of target element if exists
 * otherwise -1
 */

//time complexity O(n)
const linearSearch = (arr, targetEleemnt) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetEleemnt) {
      return i;
    }
  }
  return -1;
};
console.log(linearSearch([-10, 3, 6, 1, 89, 20], 3)); // 1
console.log(linearSearch([-10, 3, 6, 1, 89, 20], 89)); // 4
console.log(linearSearch([-10, 3, 6, 1, 89, 20], 55)); // -1

/**
 * Big-O notation
 * 1 loop -->O(n)
 * 2 nested loops --> O(n^2)
 * Input size reduced by half --> O(logn)
 */
