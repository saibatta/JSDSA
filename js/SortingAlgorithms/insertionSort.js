/**
 * Sort an array of integers using Insertion sort
 *
 * 1.Split array into 2 parts -- 1st one sorted array and 2nd is unsorted array
 * 2.Assume 1st element is already sorted & remaining elements are not
 * 3.Select element from unsorted list and compare with all elements in sorted array
 *   a. if all element(s) in sorted part is < selected element, then proceed with next element from unsorted list
 *   b. if element(s) in sorted part is > selected element, then shift towrds right to unsorted list and insert the selected element at right index
 * 4.Repeat till all the unsorted elements are placed in right order
 */

const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let selectedEle = arr[i]; // selected element from unsorted array
    let sortedIndex = i - 1; //
    while (sortedIndex >= 0 && arr[sortedIndex] > selectedEle) { // 3.b
      arr[sortedIndex + 1] = arr[sortedIndex]; // sorted array part a[j]
      sortedIndex = sortedIndex - 1; // holding/updating sorted array index to compare rest of sorted array elements
    }
    arr[sortedIndex + 1] = selectedEle; // 3.a
  }
  return arr;
};
console.log(InsertionSort([-2, -3, -8, 0, 20, 8, 5, 10])); //[-8,-3,-2,0,5,8,10,20]
console.log(InsertionSort([20, 3, -2, -10, 0, 50, 2, -9])); //[-10,-9,-2,0,2,3,20,50]

// time complexity - O(n^2) nested loops
