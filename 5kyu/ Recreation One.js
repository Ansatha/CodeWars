/*
https://www.codewars.com/kata/55aa075506463dac6600010d

Description:

1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

Task

Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

Example:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests".

Note

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

*/

// Solution:
function listSquared(m, n) {
            // Creating array with elements from m to n.
    return  Array(n - m + 1).fill(m).map((x, y) => x + y)
            // Changing every element into: [element, sumDivs^2].
            .map(d => {
                let div = [d];
                for(i = 1 ; i <= d/2; i++){
                    if (d % i == 0) div.push(i)
                };
                return [d, div.map(d => d * d).reduce((d1, d2) => d1 + d2, 0)];
            })
            // Keeping only the elments which sumDivs^2 == perfect square.
            .filter(g => Number.isInteger(Math.sqrt(g[1],2)));
};
/*
Time Complexity: O(n)
*/

// Try it:
// let m = 1;
// let n = 250;
// console.log(listSquared(m, n));