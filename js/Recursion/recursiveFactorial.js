/**
 * Problem Statement : write a recursive factorial 
 * function to return a value
 */

/**
 * Proplem break down
 *  0! = 1 ==> 1
 *  1! = 1*0! ==> 1*1 ==> 1
 *  2! = 2*1! ==> 2*1 ==> 2
 *  3! = 3*2! ==> 3*2 ==> 6
 *  ......
 * 👉 n! = n*(n-1)!
 */

const recursiveFactorial = (n) => {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
};
console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(3)); // 6
console.log(recursiveFactorial(8)); // 40320
