/*
https://www.codewars.com/kata/59c919326bddd238e9000103

Description:

You are a lonely frog.

You live on a coordinate axis.

The meaning of your life is to jump and jump..

There are only two rules you must follow:

the first and last jumps should be of size 1;

the absolute difference between the lengths of two consecutive jumps should be less than or equal to 1.

Now, here comes your new task. Your starting point is 1, the target point is n.

You need to jump to the target point with minimal steps. Please tell me, what's the minimal steps?

1 <= n <= 10^9

Example

For n = 5, the output should be 3.

 step  from   to   distance
  1:     1 --> 2       1
  2:     2 --> 4       2
  3:     4 --> 5       1
For n = 14, the output should be 7.

 step  from    to   distance
  1:     1  --> 2       1
  2:     2  --> 4       2
  3:     4  --> 7       3
  4:     7  --> 10      3
  5:     10 --> 12      2
  6:     12 --> 13      1
  7:     13 --> 14      1

*/

// Solution:
function jumps(n) {
    return Math.sqrt(n-1.15)*2|0;
};

// Try it:
// let a = 20;
// let arr = [];
// for(i=1; i<a; i++){
//     arr.push(i+':'+jumps(i));
// }
// console.log(arr);