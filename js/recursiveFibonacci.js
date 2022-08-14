// Problem Statement: write a recursive fibonacci series and return value by index

// 0, 1, 1, 2, 3, 5, 8 ..... Fibonacci Series
// 0, 1, 2, 3, 4, 5, 6 ..... Indexes

/**
 * 0 & 1 indexes are the intial condition so 
        fib(2)=fib(1)+fib(0) 
        fib(2)=1+0 
        fib(2)=0
 * Similarly 
        fib(3)=fib(2)+fib(1)
        fib(3)=1+1
        fib(3)=2
* Finally 
        fib(n)=fib(n-1)+fib(n-2)
 */

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};
console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(4)); // 3
console.log(recursiveFibonacci(8)); // 21
console.log(recursiveFibonacci(20)); // 6765
