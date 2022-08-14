/**
 * Given an sorted array find the index of target element if exists
 * otherwise -1
 */
// O(logn)
const binarySearch = (arr, targetEle) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (targetEle === arr[midIndex]) {
      return midIndex;
    }
    if (targetEle < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
};
console.log(binarySearch([-5, -2, 0, 3, 5, 8, 10], 3)); // 3
console.log(binarySearch([-5, -2, 0, 3, 5, 8, 10], 10)); // 6
console.log(binarySearch([-5, -2, 0, 3, 5, 8, 10], 33)); // -1
