/**
 * using recursive way
 * Given an sorted array find the index of target element if exists
 * otherwise -1
 */
// O(logn)
const binarySearch = (arr, targetEle) => {
  return search(arr, targetEle, 0, arr.length - 1);
};
const search = (arr, targetEle, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (targetEle === arr[midIndex]) {
    return midIndex;
  }
  if (targetEle < arr[midIndex]) {
    return search(arr, targetEle, leftIndex, midIndex - 1);
  } else {
    return search(arr, targetEle, midIndex + 1, rightIndex);
  }
};
console.log(binarySearch([-5, -2, 0, 3, 5, 8, 10], 3)); // 3
console.log(binarySearch([-5, -2, 0, 3, 5, 8, 10], 10)); // 6
console.log(binarySearch([-5, -2, 0, 3, 5, 8, 10], 33)); // -1
